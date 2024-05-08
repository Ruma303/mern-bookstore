const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router
    .get('/', bookController.getAllBooks)
    .post('/', bookController.createBook)
    .get('/:id', bookController.getBookById)
    .put('/:id', bookController.updateBook)
    .delete('/:id', bookController.deleteBook);

module.exports = router;