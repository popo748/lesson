from dotenv import load_dotenv
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from fastapi import FastAPI
from langchain.output_parsers.datetime import DatetimeOutputParser 

# Load environment variables
load_dotenv()

app = FastAPI()

# Get the API key from the environment variable
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

# Initialize the language model
llm = ChatGoogleGenerativeAI(model='gemini-1.5-flash', api_key=GEMINI_API_KEY)

@app.get('/datetime/')
async def get_datetime():
    # Create a chat prompt template
    chat_prompt = ChatPromptTemplate.from_messages(
        [
            (
                'system',
                'You reply to questions in datetime patterns.',
            ),
            (
                'human',
                '{request}\n{format_instructions}'
            )
        ]
    )

    # Initialize the output parser
    output_parser = DatetimeOutputParser()

    # Generate a response from the language model
    ai_msg = llm.invoke(
        chat_prompt.format(
            request='When was the first phone invented?',
            format_instructions=output_parser.get_format_instructions()
        )
    )

    # Return the content of the AI message
    return {"response": ai_msg.content}
