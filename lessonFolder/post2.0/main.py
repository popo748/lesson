from fastapi import FastAPI, Depends, Path, HTTPException
import models
from models import Books
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel, StrictInt, Field 

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class BookRequest(BaseModel):
    title: str = Field(min_length=3, max_length=1000)
    author: str = Field(min_length=3, max_length=1000)
    published_year: StrictInt = Field(gt=1800, lt=2025)

#To read book data:
@app.get("/books")
async def read_all(db: db_dependency):
    return db.query(Books).all()

@app.get("/books/{book_id}")
async def get_book_by_id(db: db_dependency, book_id: int = Path(gt=0)):
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is not None:
        return book_result

    raise HTTPException(status_code=404, detail="Book not found")

#To create book data:
@app.post("/books")
async def create_book(db: db_dependency, book_request: BookRequest):
    new_book = Books(title=book_request.title, author=book_request.author, published_year=book_request.published_year)
    db.add(new_book)
    db.commit()
    db.refresh(new_book)
    return new_book

#To update book data:
@app.put("/books/{book_id}")
async def update_book(db: db_dependency,
                      book_id: int,
                      book_request: BookRequest):
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    
    book_result.title = book_request.title
    book_result.author = book_request.author
    book_result.published_year = book_request.published_year

    db.add(book_result)
    db.commit()
    return {"message": "Book successfully updated"}

#To delete book data:
@app.delete("/books/{book_id}")
async def delete_book(db: db_dependency, book_id: int = Path(gt=0)):
    book_result = db.query(Books).filter(Books.id == book_id).first()

    if book_result is None:
        raise HTTPException(status_code=404, detail="Book not found")
    else:
        db.delete(book_result)
        db.commit()
        return {"message": "Book successfully deleted"}
