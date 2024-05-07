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
        default: null,
        required: false
    },
    genre: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports =  Book;