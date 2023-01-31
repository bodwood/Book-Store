import React from 'react';
import ReactDOM from 'react-dom/client';
import books from './books';
import Book from './book';
import './index.css'

//what we want to place in elements
const BookList = () => {
  return (
    <>
    <h1>Best Sellers</h1>
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />
      })}
    </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
