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
    .get('/details/:id', getBookById)
    .post('/create', createBook)
    .put('/edit/:id', updateBook)
    .delete('/delete/:id', deleteBook);

export default router;