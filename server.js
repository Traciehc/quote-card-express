"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = 1776;

require("dotenv").config(); // Ensure this is at the top to load the .env file
const cors = require("cors");
const corsOptions = {
    origin: `http://localhost:1776`
};
app.use(cors(corsOptions));
app.use("", express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getRandomPhoto() {
    const url = `https://api.unsplash.com/photos/random?client_id=${process.env.CLIENT_ID}`; // Use process.env to access the key
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Unsplash API Response:", data); // Log Unsplash API response

        if (data.urls && data.urls.regular) {
            const receivedPhoto = data.urls.small;
            console.log("Received Photo URL:", receivedPhoto); // Log received photo URL
            return receivedPhoto;
        } else {
            console.error("Received Data does not contain expected fields.");
            return null;
        }
    } catch (error) {
        console.log("API Fetch Error:", error);
        return null;
    }
}

app.get("/api/getRandomImage", (req, res) => {
    getRandomPhoto().then((returnedPhoto) => {
        if (returnedPhoto) {
            console.log("Returned Photo URL:", returnedPhoto); // Log returned photo URL
            res.status(200).json({
                status: 200,
                data: returnedPhoto
            });
        } else {
            console.log("No photo URL returned.");
            res.status(500).json({
                status: 500,
                message: "Failed to fetch photo."
            });
        }
    });
});

app.listen(port || 8080, () => {
    console.log(`Server is running on http://localhost:${port || 8080}`);
    console.log("Press Ctrl+C to end this process.");
});
