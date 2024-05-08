const express = require('express'), app = express();
const database = require('./config/database');

//% Configurazione server
require('dotenv').config();
const LOCAL_PORT = process.env.LOCAL_PORT || 3000;


//% Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//% Avvio Server
(async () => {
    try {
        await database();
        app.listen(LOCAL_PORT, () => {
            console.log(`Server listening on port ${LOCAL_PORT}`);
        });
    } catch (error) {
        console.error(`Error starting server: ${error}`);
    }
})()
