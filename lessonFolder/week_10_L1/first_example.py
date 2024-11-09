from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

llm = ChatGoogleGenerativeAI(model='gemini-1.5-flash', api_key=GEMINI_API_KEY)

messages = [
    (
        'system',
        'You are a helpful assistant that translates english to malay. Translate the user sentence.',

    ),
    ('human', 'i love programming.'),
    ]

ai_msg = llm.invoke(messages)
print(ai_msg.content)