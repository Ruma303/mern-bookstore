import React from 'react';
import { useState, useEffect } from 'react';

const EditBook = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2>Edit Book </h2>

        </div>
    )
}

export default EditBook