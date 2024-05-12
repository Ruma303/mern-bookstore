    import React from 'react';
    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    const CreateBook = () => {
        const navigate = useNavigate();
        const [book, setBook] = useState({
            title: '',
            author: '',
            publicationYear: '',
            genre: '',
    });
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(book);
            fetch('http://localhost:3000/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
            .then(response => response.json())
            .then(data => console.log(data), navigate(`/books/`))
            .catch(error => console.error('Error:', error));
        };
        const handleChange = (event) => {
            const { name, value } = event.target;
            setBook(prevBook => ({
                ...prevBook,
                [name]: value
            }));
        };
        return (
            <div>
                <h1 className='text-3xl font-semibold mb-6'>Create a new book</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                        <input type="text" id="title" name="title" value={book.title} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                        <input type="text" id="author" name="author" value={book.author} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="genre" className="block text-gray-700 text-sm font-bold mb-2">Genres:</label>
                        <input type="text" id="genre" name="genre" value={book.genre} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="publicationYear" className="block text-gray-700 text-sm font-bold mb-2">Publication Year:</label>
                        <input type="number" id="publicationYear" name="publicationYear" value={book.publicationYear}
                        onChange={(e) => setBook(prevBook => ({...prevBook, publicationYear: parseInt(e.target.value) || ''}))}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Create</button>
                </form>
            </div>
        )
    }
    export default CreateBook



