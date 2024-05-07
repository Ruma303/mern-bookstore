import mongoose from "mongoose";
import { Schema } from "mongoose";

// Sottoschema per l'autore
const authorSchema = new Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false }
});

// Sottoschema per le recensioni
const reviewSchema = new Schema({
    reviewer: { type: String, required: false },
    rating: { type: Number, required: false, min: 0, max: 10 },
    reviewText: String
});

// Schema principale per il libro
const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: authorSchema,
    publishYear: { type: Number, default: null },
    price: { type: Number, default: null },
    genre: [String],
    reviews: [reviewSchema]
}, { timestamps: true });


const Book = mongoose.model('Book', bookSchema);

export default Book;