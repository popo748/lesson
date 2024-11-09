from fastapi import APIRouter, Depends, Path, HTTPException  
from pydantic import BaseModel
from models import Users
from database import SessionLocal
from typing import Annotated 
from sqlalchemy.orm import Session

from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from jose import jwt, JWTError
from datetime import timedelta, datetime, timezone

router=APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db) ]
bcrypt_context=CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserRequest(BaseModel):
    username:str
    first_name:str
    last_name:str
    password:str
    user_type:str

@router.post("/auth")
async def create_user(db: db_dependency,
                      user_request: UserRequest):
    user=Users(
    username = user_request.username,
    first_name = user_request.first_name,
    last_name = user_request.last_name,
    hashed_password = bcrypt_context.hash(user_request.password),
    user_type = user_request.user_type
    )
    db.add(user)
    db.commit()
#@router.get("/auth/")
#sync def get_user():
#    return {"user": "authenticated"}

SECRET_KEY = "84d543dcd23f4eae85532369e62eaf4f7453bfdb4b03aca7312a655f911ba523"
ALGORITHM = "HS256"

oauth2_bearer=OAuth2PasswordBearer(tokenUrl="token")

class Token(BaseModel):
    access_token: str
    token_type: str

def authenticate_user(username: str, password: str, db):
    user=db.query(Users).filter(Users.username==username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user

def create_access_token(username:str,
                        user_id:int,
                        expires_delta: timedelta):
    encode={
        "sub": username,
        "id": user_id
    }

    expires=datetime.now(timezone.utc) + expires_delta
    encode.update({"exp": expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)

@router.post("/token", response_model=Token)
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
                db:db_dependency):
    user=authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(status_code=401,
                            detail="could not validate user")
    
    else:
        token=create_access_token(user.username, user.id, timedelta(minutes=20))

        return{"access_token": token, "token_type": "bearer"}
    
async def get_current_user(token: Annotated[str, Depends(oauth2_bearer)]):
    try:
        payload=jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        user_id: int = payload.get("id")
        if username is None or user_id is None:
            raise HTTPException(status_code=401,
                            detail="could not validate user")
        
        return {"username": username, "id": user_id}
    except JWTError:
        raise HTTPException(status_code=401,
                            detail="could not validate user")