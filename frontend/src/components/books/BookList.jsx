    

    import React from 'react';
    import { useState, useEffect } from 'react';

    const BookList = () => {
        const [books, setBooks] = useState([]);

        useEffect(() => {
            fetch('http://localhost:3000/books')
                .then(response => response.json())
                .then(data => setBooks(data));
        }, []);

        return (
            <div>
                <h2>Book List</h2>
                <ul>
                    {books.map(book => (
                        <li key={book._id}>{book.title}</li>
                    ))}
                </ul>
            </div>
        )
    }

    export default BookList