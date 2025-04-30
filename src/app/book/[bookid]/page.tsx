
import { Book } from '@/types';
import React from 'react'
import Image from 'next/image'

const SingleBookPage = async ({params}:{params:{bookid:string}}) => {
    let book: Book | null = null
    try{
        const response = await fetch(`${process.env.BACKEND_URL}/books/${params.bookid}`)

        if(!response){
            throw new Error("No Response Recived")
        }

        book = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(err:any){
        throw new Error('Error While Fetching the Book',err)
    }

    if(!book){
        throw new Error('No Book Found')
    }

  return (
    <>
    <div className='max-w-6xl mx-auto flex justify-between px-10 py-4'>
        <div className='basis-2xl'>
            <h2 className='text-4xl tracking-tight font-bold text-primary-900 mt-5 mb-2'>{book.title}</h2>
            <h3 className='text-xl text-primary-700 tracking-tight mb-5'>{book.author.name}</h3>

            <div className='bg-primary-100 px-2.5 py-5 rounded-sm   mb-5'>
            <span className='text-s bg-primary-700 px-2 py-1 rounded-sm text-white '>Description: </span>
            <p className='text-lg font-semibold mt-3'> {book.description}</p>

            </div>

            <button className='h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:border-primary-600
            hover:bg-primary-700 active:border-primary-200 active:bg-primary-200'>Download The E-book</button>
        </div>
        <div className='p-12'>
            <Image
            className='border-2 border-black'
            src={book.coverImage}
            alt='This is a Cover Page of Book'
            height={0}
            width={0}
            style={{width:'auto', height:"25rem"}}
            sizes='100vw'
            />
        </div>
    </div>
    
    </>
  )
}

export default SingleBookPage