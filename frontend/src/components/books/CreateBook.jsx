import React from 'react';
import { useState, useEffect } from 'react';

const CreateBook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books/create')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/books/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold'>Create a new book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={book.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" name="author" value={book.author} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" id="genre" name="genre" value={book.genre} onChange={handleChange} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateBook