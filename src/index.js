import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//book items
const books = [
  {
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
    image:
      'https://m.media-amazon.com/images/I/51Zu0ZwT0jL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    id: 1,
  },
  {
    title: 'Spare',
    author: 'Prince Harry The Duke of Sussex',
    image: './images/atomic-habits.jpg',
    id: 2,
  },
  {
    title: 'It Starts with Us',
    author: 'Colleen Hoover',
    image:
      'https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg',
    id: 3,
  },
]

//what we want to place in elements
const BookList = () => {
  return (
    <section className='booklist'>
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

//structure of elements
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

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log('e')
    console.log(e.target.name);
    console.log(e.target.type);
  }
  const handleButtonClick = () => {
    alert('Clicked Button')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Form</h2>
        <input
          type='text'
          name='example'
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button onClick={handleButtonClick}>Click Me</button>
      </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
