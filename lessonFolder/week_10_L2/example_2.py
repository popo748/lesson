import os
from langchain_mongodb import MongoDBAtlasVectorSearch
from pymongo import MongoClient
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

embeddings = GoogleGenerativeAIEmbeddings(model='models/embedding-001', google_api_key=GEMINI_API_KEY)

client = MongoClient(os.getenv('MONGODB_ATLAS_CLUSTER_URL'))

DB_NAME='test_db'
COLLECTION_NAME='test_collection'
ATLAS_VECTOR_SEARCH_INDEX_NAME='test-index-1'

MONGODB_COLLECTION = client[DB_NAME][COLLECTION_NAME]

vector_store = MongoDBAtlasVectorSearch(
    collection=MONGODB_COLLECTION,
    embedding=embeddings,
    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
    relevance_score_fn='cosine',
)

text_splitter=CharacterTextSplitter(
    separator='\n',
    chunk_size=200,
    chunk_overlap = 0
)

loader = TextLoader('facts.txt')
docs = loader.load_and_split(
    text_splitter=text_splitter
)

vector_store.add_documents(docs)
print('document added')
client.close()