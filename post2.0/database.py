import os
#from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from google.cloud.sql.connector import Connector

#load environment variables from .env file
#load_dotenv()

# PostgreSQL connetion details
DB_USER = os.environ.get('DB_USER', 'postgres')
DB_PASS = os.environ.get("DB_PASS", 'admin123')
DB_NAME = os.environ.get("DB_NAME", 'books_db')
INSTANCE_CONNECTION_NAME=os.environ.get('INSTANCE_CONNECTION_NAME', 'gaia-capstone02-prd:us-central1:bookstore-db')

def getconn():
    connector = Connector()
    conn = connector.connect(
        INSTANCE_CONNECTION_NAME,
        'pg8000',
        user=DB_USER,
        password=DB_PASS,
        db=DB_NAME
    )

#Database URL:
#SQLALCHEMY_DATABASE_URL = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

engine = create_engine('postgresql+pg8000://',
                       creator=getconn,)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()