const Book = require("../models/Book.js");

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (books.length === 0) {
            res.status(404).json({ message: `Nessun libro trovato` });
        } else {
            res.json(books);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: `Libro non trovato` });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createBook = async (req, res) => {
    try {
        const existingBook = await Book.findOne({ title: req.body.title });
        if (existingBook) {
            return res.status(400).json({ message: `Il libro ${existingBook.title} già esiste` });
        }
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publicationYear: req.body.publicationYear,
        });
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const update = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publicationYear: req.body.publicationYear,
        };
        const updatedBook = await Book.findByIdAndUpdate(id, update, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: `Libro ${req.body.title} non trovato` });
        }
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBook = await Book.findByIdAndDelete(id);
        if (!deleteBook) {
            res.status(404).json({ message: `Libro non trovato` });
        }
        res.status(201).json({ message: `Libro ${deleteBook.title} eliminato` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };