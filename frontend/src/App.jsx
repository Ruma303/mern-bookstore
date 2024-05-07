import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/books/BookList';
import ShowBook from './components/books/ShowBook';
import CreateBook from './components/books/CreateBook';
import EditBook from './components/books/EditBook';
import DeleteBook from './components/books/DeleteBook';
import Home from './components/Home';
import Navbar from './partials/Navbar';

function App() {
    return (
        <>
            <Router>
                <h1 className="text-4xl font-bold">Bookstore</h1>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/books/details/:id" element={<ShowBook />} />
                    <Route path="/books/create" element={<CreateBook />} />
                    <Route path="/books/edit/:id" element={<EditBook />} />
                    <Route path="/books/delete/:id" element={<DeleteBook />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
