from fastapi import FastAPI, Depends, Path, HTTPException
import models
from models import Books
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel, StrictInt, Field
from typing import Optional

app=FastAPI()

models.Base.metadata.create_all(bind=engine)

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class BookRequest(BaseModel):
    id: Optional[StrictInt]=None
    title: str=Field(min_length=3)
    author: str=Field(min_length=3)
    published_year: StrictInt = Field(gt=1800, lt=2025)



@app.get("/books")
async def read_all(db: db_dependency):
    return db.query(Books).all()

@app.get("/books/{book_id}")
async def get_book_by_id(db: db_dependency, book_id:int=Path(gt=0)):
    book_results=db.query(Books).filter(Books.id==book_id).first()

    if book_results is not None:
        return book_results
    
    raise HTTPException(status_code=404, detail="Book Not Found")

@app.post("/books")
async def create_book(db: db_dependency, book_request: BookRequest):
    book = Books(**book_request.model_dump())
    db.add(book)
    db.commit()
    return "book create success"

@app.put("/books/{book_id}")
async def update_book(db: db_dependency,
                      book_id: int,
                      bok_request: BookRequest):
    book_result = db.query(Books).filter(Books.id==book_id).first()
    if book_result is None:
        raise HTTPException(status_code=404, detail='book not found')
    book_result.title=bok_request.title
    book_result.author=bok_request.author
    book_result.published_year=bok_request.published_year

    db.add(book_result)
    db.commit()

@app.delete("/books/{book_id}")
async def delete_book(db: db_dependency, book_id: int=Path(gt=0)):
    book_result=db.query(Books).filter(Books.id==book_id).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail='book not found')
    else:
        db.query(Books).filter(Books.id==book_id).delete()

    db.commit()