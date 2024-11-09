from fastapi import FastAPI, Body
app=FastAPI()

BOOKS=[
    {"title":"Fourth Wing", "author": "Rebecca Yarros", "published_year": 2023},
    {"title":"Third Wing", "author": "Rebecca Babados", "published_year": 2022},
    {"title":"Second Wing", "author": "Rebecca Tamados", "published_year": 2021},
    {"title":"First Wing", "author": "Rebecca Yarros", "published_year": 2020},
]
@app.get("/hello")
async def helloworld():
    return {"message" : "Hello World"}                  

@app.get("/books")
async def getAllBooks():
    return BOOKS

@app.get("/books/{book_title}")
async def get_book(book_title: str):
    for book in BOOKS:
        if book.get("title").casefold()==book_title.casefold():
            return book
        
    return "Book Not Found"

@app.get("/books/")
async def get_book_by_query(author: str):
    books_to_return=[]
    for book in BOOKS:
        if book.get("author").casefold()==author.casefold():
            books_to_return.append(book)
        
    return books_to_return

@app.get("/books/")
async def get_book_by_query(author: str, published_year: int):
    books_to_return=[]
    for book in BOOKS:
        if book.get("author").casefold()==author.casefold() and \
            book.get("published_year")==published_year:
            books_to_return.append(book)
        
    return books_to_return

@app.post("/books/create_book")
async def create_book(new_book=Body()):
    BOOKS.append(new_book)

    return "Book Record Create Success"

@app.put("/books/update_book")
async def update_boo(updated_book=Body()):
    for i in range(len(BOOKS)):
        if BOOKS[i].get("title").casefold()== updated_book.get("title").casefold():
            BOOKS[i]=updated_book
    return "Book record update success"

@app.delete("/books/delete_book/{book_title}")
async def delete_book(book_title: str):
    for i in range(len(BOOKS)):
        if BOOKS[i].get("title").casefold()==book_title.casefold():
            BOOKS.pop(i)
            break
    return "Book delete delete success"