import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Title />
      <Author />
      <BookImage />
    </article>
  )
}

const Title = () => {
  return <h1>Spare</h1>
}

const Author = () => {
  return <h2 style={inlineStyle}>Prince Harry The Duke of Sussex</h2>
}

const BookImage = () => {
  return (
    <img src='./images/atomic-habits.jpg' />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
