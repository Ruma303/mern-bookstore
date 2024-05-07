const express = require('express');
const router = express.Router();
const {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController.js');

router
    .get('/', getBooks)
    .get('/details/:id', getBookById)
    .post('/create', createBook)
    .put('/edit/:id', updateBook)
    .delete('/delete/:id', deleteBook);

module.exports = router;