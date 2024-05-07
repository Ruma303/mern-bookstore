import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between bg-gray-800 p-4">
                <h1>
                    <Link to="/" className="text-white font-bold text-3xl">Bookstore</Link>
                </h1>
                <Link to="/books" className="text-white">Books</Link>
                <Link to="/books/create" className="text-white">Create Book</Link>
            </nav>
        </header>
    )
}

export default Navbar