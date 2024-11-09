import os
from langchain_mongodb import MongoDBAtlasVectorSearch
from pymongo import MongoClient
from langchain_google_genai.embeddings import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

embeddings = GoogleGenerativeAIEmbeddings(model='models/embedding-001', google_api_key=GEMINI_API_KEY)

client = MongoClient(os.getenv('MONGODB_ATLAS_CLUSTER_URL'))

DB_NAME='test_db'
COLLECTION_NAME='test_collection_pdf'
ATLAS_VECTOR_SEARCH_INDEX_NAME='test-index-pdf'

MONGODB_COLLECTION = client[DB_NAME][COLLECTION_NAME]

vector_store = MongoDBAtlasVectorSearch(
    collection=MONGODB_COLLECTION,
    embedding=embeddings,
    index_name=ATLAS_VECTOR_SEARCH_INDEX_NAME,
    relevance_score_fn='cosine',
)

vector_store.create_vector_search_index(dimensions=768)

print('Vector store for pdf loader created')
client.close()