import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div className='max-w-full h-full'>
            <h1 className='text-3xl font-semibold'>Book List</h1>
            <ul className='grid grid-cols-3 gap-4'>
                {books.map(book => (
                    <li key={book._id} className="shadow-md px-4 py-3 rounded-lg text-left hover:scale-105 transition-all">
                        <Link to={book._id}>
                            <h3 className='text-xl font-semibold'>{book.title}</h3>
                            <p className='text-md'><b>Author</b>: {book.author}</p>
                            <p className='text-md'><b>Genres</b>: {book.genre}</p>
                            <p className='text-md'><b>Publication Year</b>: {book.publicationYear}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList