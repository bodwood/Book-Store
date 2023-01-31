import React from 'react';
import ReactDOM from 'react-dom/client';
import books from './books';
import Book from './book';
import './index.css'

//what we want to place in elements
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
