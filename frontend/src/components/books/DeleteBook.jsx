import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DeleteBook = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);
    const location = useLocation();
    const book = location.state.book;
    console.log(book)


    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        const deleteTimeout = setTimeout(() => {
            fetch('http://localhost:3000/books/' + book._id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => navigate('/books/'))
            .catch(error => {
                console.error('Error:', error);
            });
        }, 5000);

        return () => {
            clearInterval(timerId);
            clearTimeout(deleteTimeout);
        };
    }, [book._id, navigate]);

    const handleAbort = () => {
        navigate(-1);
    };

    return (
        <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-2xl font-semibold'>Deleting {book.title} in {seconds} seconds...</h2>
            <button onClick={handleAbort} className="bg-orange-400 px-4 py-2 rounded-lg text-white font-bold">
                Abort!
            </button>
        </div>
    );
};

export default DeleteBook;