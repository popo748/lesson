from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.output_parsers.datetime import DatetimeOutputParser 

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

llm = ChatGoogleGenerativeAI(model='gemini-1.5-flash', api_key=GEMINI_API_KEY)

output_parser = DatetimeOutputParser ()

chat_prompt = ChatPromptTemplate.from_messages(
    [
        (
            'system',
            'you reply to questions in datetime patterns',
        ),
        (
            'human',
            '{request}\n{format_instructions}'
        )
    ]
)

chain = chat_prompt|llm

ai_msg = chain.invoke(
    {
        'request':'when is the first phone being invented',
        'format_instructions':output_parser.get_format_instructions()
    }
)

print(output_parser.get_format_instructions())
print('\n')
print(ai_msg.content)