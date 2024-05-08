const mongoose = require('mongoose');
require('dotenv').config();
const MONGOOSE_DB_NAME = process.env.MONGOOSE_DB_NAME || 'books';
const MONGOOSE_DB_PORT = process.env.MONGOOSE_DB_PORT || '27017';

module.exports = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:${MONGOOSE_DB_PORT}/${MONGOOSE_DB_NAME}`);
        console.log(`Connected to ${MONGOOSE_DB_NAME} database`);
    } catch (error) {
        console.error(`Error connecting to ${MONGOOSE_DB} database: ${error}`);
    }
}