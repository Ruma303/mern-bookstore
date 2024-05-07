import express from 'express';
const router = express.Router();
import {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/bookController.js';

router
    .get('/', getBooks)
    .get('/:id', getBookById)
    .post('/', createBook)
    .put('/:id', updateBook)
    .delete('/:id', deleteBook);

export default router;