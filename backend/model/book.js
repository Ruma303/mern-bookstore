    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const BookSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: false
        },
        publicationYear: {
            type: Number,
            required: false
        },
        genre: {
            type: String,
            required: false
        }
    },{ timestamps: true });

    module.exports = mongoose.model('Book', BookSchema);


    