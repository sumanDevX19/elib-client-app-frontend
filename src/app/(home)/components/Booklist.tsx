import { Book } from '@/types'
import React from 'react'
import BookCard from './BookCard';

const Booklist = ({books}:{books:Book[]}) => {
  console.log(books);
  
  
  
  return <div className='max-w-7xl mx-auto flex flex-wrap gap-8 px-5 py-5 justify-center md:justify-normal'>
    {
     books.map(book=>(
      <BookCard key={book._id} book={book}/>
     ))
    }
  </div> 

  
}

export default Booklist