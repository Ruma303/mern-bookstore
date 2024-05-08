const mongoose = require('mongoose');
require('dotenv').config();
const DB_NAME = process.env.DB_NAME || 'MERN', DB_PORT = process.env.DB_PORT || 27017;

module.exports = async function mongooseConnect() {
    try {
        await mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
        console.log(`Connected to ${DB_NAME} database on port ${DB_PORT}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}