const Book = require('../model/book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createBook = async (req, res) => {
    try {
        const existingBook = await Book.findOne({ title: req.body.title });
        if (existingBook) {
            return res.status(400).json({ message: `Book ${title} already exists` });
        }
        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            publicationYear: req.body.publicationYear,
            genre: req.body.genre
        });
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        book.title = req.body.title;
        book.author = req.body.author;
        book.publicationYear = req.body.publicationYear;
        book.genre = req.body.genre;
        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(404).json({ message: `Book ${book.title} deleted` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook
}