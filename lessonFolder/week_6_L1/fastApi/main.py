from fastapi import FastAPI, Depends, Path, HTTPException
from fastapi.middleware.cors import CORSMiddleware  
import models
from models import Books 
from database import engine, SessionLocal
from typing import Annotated 
from sqlalchemy.orm import Session
from pydantic import BaseModel, StrictInt, Field
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db) ]

class BookRequest(BaseModel):
    id: Optional[StrictInt] = None 
    title: str = Field(min_length=3)
    author: str = Field(min_length=3)
    published_year: StrictInt = Field(gt=0, lt=2025)

@app.get("/books")
async def read_all(db: db_dependency):
    return db.query(Books).all()

@app.get("/books/{book_id}")
async def get_book_by_id(db: db_dependency, book_id: int = Path(gt=0)):
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is not None:
        return book_result
    
    raise HTTPException(status_code=404, detail="Book not found") 

@app.post("/books/create_book")
async def create_book(db: db_dependency, book_request: BookRequest):
    book = Books(**book_request.model_dump())
    db.add(book)
    db.commit()

@app.put("/books/{book_id}")
async def update_book(db: db_dependency,                        
                      book_request: BookRequest,
                      book_id: int = Path(gt=0)):
    book_result = db.query(Books).filter(Books.id == book_id).first()
    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    book_result.title = book_request.title 
    book_result.author = book_request.author
    book_result.published_year = book_request.published_year
    
    db.add(book_result)
    db.commit()

@app.delete("/books/{book_id}")
async def delete_book(db: db_dependency, book_id: int = Path(gt=0)):
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    else:
        db.query(Books).filter(Books.id == book_id).delete()
    
    db.commit()
    