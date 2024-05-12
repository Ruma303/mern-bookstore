import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                <Navbar />
                <main className='flex flex-col items-center bg-gray-100 min-w-screen min-h-screen p-8 mx-32 gap-5 text-center'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books/" element={<BookList />} />
                        <Route path="/books/:id" element={<ShowBook />} />
                        <Route path="/books/create" element={<CreateBook />} />
                        <Route path="/books/edit/:id" element={<EditBook />} />
                        <Route path="/books/delete/:id" element={<DeleteBook />} />
                    </Routes>
                </main>
            </Router>
        </>
    )
}

export default App
