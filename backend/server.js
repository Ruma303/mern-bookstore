const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConnection');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json('Hello World!');
});

(async function run() {
    try {
        await mongooseConnect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
    }
})()