import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const bookOne = {
  title: 'It Ends with Us: A Novel (1) ',
  author: 'Colleen Hoover',
  image:
    'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
}

const bookTwo = {
  title: 'Spare',
  author: 'Prince Harry The Duke of Sussex',
  image: './images/atomic-habits.jpg',
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        title={bookOne.title}
        author={bookOne.author}
        image={bookOne.image}
      />
      <Book
        title={bookTwo.title}
        author={bookTwo.author}
        image={bookTwo.image}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

// const Title = () => {
//   return <h1>Spare</h1>
// }

// const Author = () => {
//   return <h2 style={inlineStyle}>Prince Harry The Duke of Sussex</h2>
// }

// const BookImage = () => {
//   return (
//     <img src='./images/atomic-habits.jpg' />
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
