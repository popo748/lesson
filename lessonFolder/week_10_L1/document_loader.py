from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.document_loaders import WikipediaLoader

load_dotenv()
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

llm = ChatGoogleGenerativeAI(model='gemini-1.5-flash', api_key=GEMINI_API_KEY)

loader = WikipediaLoader(query='Olympic Games', load_max_docs=1)
context_text = loader.load()[0].page_content

prompt = ChatPromptTemplate.from_messages(
    [
        (
            'system',
            'You are a helpful assistant',
        ),
        (
            'human',
            'Answer this question:\n{question}\n Here is some extra context:\n{context}'
        )
    ]
)

chain = prompt|llm

ai_msg = chain.invoke(
    {
        'question': 'What is the origin of Olympic Game',
        'context': context_text
    }
)

print(ai_msg.content)