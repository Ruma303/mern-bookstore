import Book from "../models/Book.js";

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
        if (books.length === 0) {
            res.status(404).json({ message: `Nessun libro trovato` });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById({_id: req.params.id});
        if (!book) {
            res.status(404).json({ message: `Libro non trovato` });
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
            publishYear: req.body.publishYear,
            price: req.body.price,
            available: req.body.available,
        });
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const updateBook = await Book.findByIdAndUpdate(id, {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publishYear: req.body.publishYear,
            price: req.body.price,
            available: req.body.available,
        }, { new: true });
        if (!updateBook) {
            res.status(404).json({ message: `Libro ${req.body.title} non trovato` });
        }
        res.status(201).json(updateBook);
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


export { getBooks, getBookById, createBook, updateBook, deleteBook };