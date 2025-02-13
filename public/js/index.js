"use strict";

const el = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
};

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY found in notes.txt

async function getRandomPhoto() {
    const url = "http://localhost:1776/api/getRandomImage";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.urls.regular);

        const randomImgUrl = data.urls.regular;
        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${randomImgUrl})`;

    }catch (error) {
        console.log(error);
    }
    getRandomPhoto();
}
//interating through objects.  Save for later reference.

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
//Iterating through objects save for later reference
/*function loopQuote() {
    let currentIndex = 0;
    setInterval(() => {
        el.quote.innerText = quotes[currentIndex].quote;
        el.author.innerText = quotes[currentIndex].author;

        currentIndex++;
        if (currentIndex >= quotes.length) {
            currentIndex = 0;
        }
    }, 3000);
}
setTimeout(loopQuote, 3000);*/


