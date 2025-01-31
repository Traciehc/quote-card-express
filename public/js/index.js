"use strict";

const el = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
};

const quotes = [
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "It is far better to be alone, than to be in bad company. ",
        author: "George Washington"
    }
];

function loopQuote() {
    let count = 0;
    setInterval(() => {
        el.quote.innerText = quotes[count].quote;
        el.author.innerText = quotes[count].author;

        count++;
        if (count >= quotes.length) {
            count = 0;
        }
    }, 3000);
}
setTimeout(loopQuote, 3000);
