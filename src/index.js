import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
    image:
      'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    title: 'Spare',
    author: 'Prince Harry The Duke of Sussex',
    image: './images/atomic-habits.jpg',
  },
  {
    title: 'It Starts with Us',
    author: 'Colleen Hoover',
    image:
      'https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg',
  },
];

const BookList = () => {
  return (<section className='booklist'>
    {books.map((book) => {
      const {title, author, image } = book;
      return (
        <Book image={image} title={title} author={author}/>
      )
    })}
  </section>
  );
}

const Book = (props) => {
  const { title, author, image, children } = props
  return (
    <article className='book'>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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
