const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        default: null
    },
    genre: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports =  Book;