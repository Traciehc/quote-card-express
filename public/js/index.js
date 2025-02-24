"use strict";

const el = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
};

async function getRandomPhoto() {
    const url = "http://localhost:1776/api/getRandomImage";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Response Status:", response.status);
        console.log("Response JSON Data:", data);

        const receivedPhoto = data.data;
        console.log("Received Photo URL:", receivedPhoto);
        
        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhoto})`;

    }catch (error) {
        console.log("Fetch Error:", error);
    }
}

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
        quote: "It is far better to be alone, than to be in bad company.",
        author: "George Washington"
    }
];

function loopQuote() {
    let currentIndex = 0;
    setInterval(async () => {
        el.quote.innerText = quotes[currentIndex].quote;
        el.author.innerText = quotes[currentIndex].author;

        // Fetch and update background image
        await getRandomPhoto();

        currentIndex++;
        if (currentIndex >= quotes.length) {
            currentIndex = 0;
        }
    }, 3000); // Change quote and image every 3 seconds
}

// Initialize the loop
loopQuote();
