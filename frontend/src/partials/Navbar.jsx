import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/books/create">Create Book</Link>
    </nav>
  )
}

export default Navbar