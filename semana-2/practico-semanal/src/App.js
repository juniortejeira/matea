import { useState } from 'react';
import BooksList from './components/books-list/BooksList';
import Filters from './components/filters/Filters';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';

const books = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    genre: "Fantasia",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    pages: 374,
    genre: "Novela",
  },
  {
    title: "The 100",
    author: "Kass Morgan",
    pages: 336,
    genre: "Ciencia ficción",
  },
  {
    title: "Les trois mousquetaires",
    author: "Alejandro Dumas",
    pages: 296,
    genre: "Aventura",
  },
]
function App() {
  const [filter, setFilter] = useState(null)
  const genres = [...new Set(books.map(book => book.genre))]
  let filteredBooks = books.filter(book => filter === null || book.genre === filter)
  return (
    <div id="app">
      <Header />
      <main id="main">
        <Filters options={genres} setFilter={setFilter} actualFilter={filter} />
        <BooksList books={filteredBooks} />
      </main>
      <Footer />
    </div >)
}


export default App;
