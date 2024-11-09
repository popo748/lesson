from fastapi import FastAPI, Depends, Path, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import models
from models import Items
from database import engine, SessionLocal
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel, StrictInt, Field
from typing import Optional

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

class ItemRequest(BaseModel):
    id: Optional[StrictInt]=None
    date: str=Field(min_length=3)
    user: str=Field(min_length=3)
    task: str=Field(min_length=3)
    priority: StrictInt = Field(gt=0, lt=6)

@app.get("/items")
async def read_all(db: db_dependency):
    return db.query(Items).all()

@app.get("/items/{item_id}")
async def get_book_by_id(db: db_dependency, item_id:int=Path(gt=0)):
    item_results=db.query(Items).filter(Items.id==item_id).first()

    if item_results is not None:
        return item_results
    
    raise HTTPException(status_code=404, detail="item Not Found")

@app.post("/items/create_item")
async def create_book(db: db_dependency, item_request: ItemRequest):
    item = Items(**item_request.model_dump())
    db.add(item)
    db.commit()
    return "item create success"

@app.put("/items/{item_id}")
async def update_book(db: db_dependency,
                      item_id: int,
                      item_request: ItemRequest):
    item_result = db.query(Items).filter(Items.id==item_id).first()
    if item_result is None:
        raise HTTPException(status_code=404, detail='item not found')
    item_result.date=item_request.date
    item_result.user=item_request.user
    item_result.task=item_request.task
    item_result.priority=item_request.priority


    db.add(item_result)
    db.commit()

@app.delete("/items/{item_id}")
async def delete_book(db: db_dependency, item_id: int=Path(gt=0)):
    item_result=db.query(Items).filter(Items.id==item_id).first()

    if item_result is None:
        raise HTTPException(status_code=404, detail='item not found')
    else:
        db.query(Items).filter(Items.id==item_id).delete()

    db.commit()