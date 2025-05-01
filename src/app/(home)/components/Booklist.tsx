import React from 'react'
import BookCard from './BookCard';
import { Book } from '@/types';

const Booklist = async () => {
  const booksResponse = await fetch(`${process.env.BACKEND_URL}/books/`,{ cache:'no-store'})
  if(!booksResponse){
    throw new Error('An Error Occurred While Fetching Books')
  }

  const books = await booksResponse.json()
  
  
  
  return <div className='max-w-7xl mx-auto flex flex-wrap gap-8 px-5 py-5 justify-center md:justify-normal'>
    {
     books.map((book: Book)=>(
      <BookCard key={book._id} book={book}/>
     ))
    }
  </div> 

  
}

export default Booklist