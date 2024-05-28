const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const backgroundColor = process.env.BACKGROUND_COLOR || '#ffffff';
const customText = process.env.CUSTOM_TEXT || 'Default Text';
console.log("Background Colour:", backgroundColor); // Debugging
console.log("Custom Message:", customText); // Debugging

app.get('/', (req, res) => {
    console.log("Background Colour:", backgroundColor); // Debugging
    console.log("Custom Message:", customText); // Debugging
    
    res.send(`
        <html>
            <head>
                <title>Environment Variables App</title>
            </head>
            <body style="background-color: ${backgroundColor};">
                <h1 style="color: #000; text-align: center; margin-top: 20%;">
                    ${customText}!
                </h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
