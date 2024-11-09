from database import Base
from sqlalchemy import Column, Integer, String

class Items(Base):
    __tablename__='items'

    id=Column(Integer, primary_key=True, index=True)
    date=Column(String)
    user=Column(String)
    task=Column(String)
    priority=Column(Integer)
