let quoteRef = document.getElementById("quote");
let authorRef = document.getElementById("author");
let quoteBtnRef = document.getElementById("quoteBtn");

async function generateQuote() {
    try {
        let response = await fetch("https://api.quotable.io/random");
        let data = await response.json();
        quoteRef.innerHTML = data.content;
        authorRef.innerHTML = data.author;
    } catch (error) {
        quoteRef.innerHTML = "Failed to fetch a quote. Please try again later.";
        authorRef.innerHTML = "";
    }
}

quoteBtnRef.addEventListener("click", generateQuote);
