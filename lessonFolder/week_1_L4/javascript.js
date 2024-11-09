let quoteRef = document.getElementById("quote");
let authorRef = document.getElementById("author");
let quoteBtnRef = document.getElementById("quoteBtn");

//first async line 7, fetch api from the website,the thing fetch will be object so need second async line 8 turn the object to json data.
//content and author = property of json, await always need to put before to wait for the process to complete first like to fetch or to turn obj to json
//try catch = error handling
//catch erro, if error happens, if no happen then will be try
async function generateQuote() {
    try {
        let response = await fetch("https://api.quotable.io/random");
        let data = await response.json();
        console.log(data);
        quoteRef.innerHTML = data.content;
        authorRef.innerHTML = data.author;
    } catch (error) {
        quoteRef.innerHTML = "Failed to fetch a quote. Please try again later.";
        authorRef.innerHTML = "";
    }
}
quoteBtnRef.addEventListener("click", generateQuote);
