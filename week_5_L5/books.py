from fastapi import APIRouter, Depends, Path, HTTPException  
from models import Books 
from database import SessionLocal
from typing import Annotated 
from sqlalchemy.orm import Session
from pydantic import BaseModel, StrictInt, Field
from typing import Optional
from auth import get_current_user

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db) ]
user_dependency=Annotated[dict, Depends(get_current_user)]

class BookRequest(BaseModel):
    id: Optional[StrictInt] = None 
    title: str = Field(min_length=3)
    author: str = Field(min_length=3)
    published_year: StrictInt = Field(gt=1800, lt=2025)

@router.get("/books")
async def read_all(user: user_dependency, db: db_dependency):
    if user is None:
        raise HTTPException(status_code=401, detail="not authenticated")
    return db.query(Books).filter(Books.customer_id==user.get("id")).all()

@router.get("/books/{book_id}")
async def get_book_by_id(user: user_dependency, db: db_dependency, book_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail="not authenticated")
    
    book_result = db.query(Books).filter(Books.id == book_id)\
        .filter(Books.customer_id==user.get("id")).first()

    if book_result is not None:
        return book_result
    
    raise HTTPException(status_code=404, detail="Book not found") 

@router.post("/books")
async def create_book(user: user_dependency, db: db_dependency, book_request: BookRequest):
    if user is None:
        raise HTTPException(status_code=401, detail="not authenticated")
    
    book = Books(**book_request.model_dump(), customer_id=user.get("id"))
    db.add(book)
    db.commit()

@router.put("/books/{book_id}")
async def update_book(db: db_dependency, 
                      user:user_dependency,                       
                      book_request: BookRequest,
                      book_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail="not authenticated")

    book_result = db.query(Books).filter(Books.id == book_id)\
    .filter(Books.customer_id==user.get("id")).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    book_result.title = book_request.title 
    book_result.author = book_request.author
    book_result.published_year = book_request.published_year
    
    db.add(book_result)
    db.commit()

@router.delete("/books/{book_id}")
async def delete_book(user:user_dependency, db: db_dependency, book_id: int = Path(gt=0)):
    if user is None:
        raise HTTPException(status_code=401, detail="not authenticated")
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    else:
        db.query(Books).filter(Books.id == book_id)\
        .filter(Books.customer_id==user.get("id")).delete()
    
    db.commit()
    
