from fastapi import FastAPI, Body, Path, Query, HTTPException
from pydantic import BaseModel, StrictInt, Field
from typing import Optional
from datetime import date

app=FastAPI()

class Item:
   def __init__(self, id, date, user, task, priority):
    self.id = id
    self.date = date
    self.user = user
    self.task = task
    self.priority=priority

class ItemRequest(BaseModel):
    id: Optional[StrictInt]=None
    date: str=Field(min_length=10)
    user:str =Field(min_length=3)
    task:str =Field(min_length=3)
    priority: StrictInt =Field(gt=0, lt=6)

ITEMS=[
    Item(456, "2024-05-15", "John", "Learn VueJs", 5),
    Item(123, "2024-05-16", "Kelly", "Read a novel", 3),
    Item(100, "2024-06-22", "Luke", "Clean living room", 3),
    Item(211, "2024-07-12", "John", "Write a blog", 4),
    Item(332, "2024-07-15", "Kelly", "Go to salon", 2)
]

@app.get("/items")
async def getAllItems():
    return ITEMS

@app.get("/items/{item_user}")
async def get_user(item_user: str=Path(min_length=3)):
    matching_items = [item for item in ITEMS if item.user.casefold() == item_user.casefold()]
    
    if matching_items:
        return matching_items
    raise HTTPException(status_code=404, detail='user not found') 

@app.get("/items/")
async def get_item_by_query(user: str= Query(min_length=3), date: str= Query(min_length=10)):
    items_to_return=[]
    for item in ITEMS:
        if item.user==user and \
            item.date == date:
            items_to_return.append(item)
            
    return items_to_return

@app.post("/items/create_item")
async def create_item(new_item: ItemRequest):
    new_item = Item(**new_item.model_dump())
    ITEMS.append(getItemId(new_item))
    return "Item Record Create Success"

def getItemId(item: Item):
    if len(ITEMS)>0:
        item.id=ITEMS[-1].id+1
    else:
        item.id=1
    return item

@app.put("/items/update_item")
async def update_item(updated_item: ItemRequest):
    item_changed=False
    for i in range(len(ITEMS)):
        if ITEMS[i].id== updated_item.id:
            ITEMS[i]=updated_item
            item_changed=True
            return "Item record update success"
    if not item_changed:
        raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/delete_item/{item_task_id}")
async def delete_item(item_task_id: int=Path(gt=0)):
    item_changed=False
    for i in range(len(ITEMS)):
        if ITEMS[i].id==item_task_id:
            ITEMS.pop(i)
            item_changed=True
            
            return "Item delete delete success"
    if not item_changed:
        raise HTTPException(status_code=404, detail="Item not found")