import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ShowBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books/' + id)
            .then(response => response.json())
            .then(data => setBook(data));
    }, []);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-semibold'>{book.title}</h2>
                <p className='text-md'><b>Author</b>: {book.author}</p>
                <p className='text-md'><b>Genres</b>: {book.genre}</p>
                <p className='text-md'><b>Publication Year</b>: {book.publicationYear}</p>
            </div>
            <div className='flex  gap-2'>
                <Link to={`/books/edit/${book._id}`} className="bg-amber-400 px-4 py-2 rounded-lg">Update</Link>
                <Link to={`/books/delete/${book._id}`} className="bg-red-500 px-4 py-2 rounded-lg">Delete</Link>
            </div>
        </div>
    )
}

export default ShowBook