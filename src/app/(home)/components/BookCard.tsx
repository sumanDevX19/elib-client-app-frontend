import { Book } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className=' w-[390px] bg-white border-1 border-zinc-400/60 items-center px-5 py-4 rounded-sm shadow-xl hover:scale-110 hover:transition-all'>
        
        <div className='flex gap-5'>
            <div >
                <Image
                className='rounded-sm max-w-28 max-h-60 border-1 border-zinc-900'
                src={book.coverImage}
                alt={book.title}
                width={0}
                height={0}
                sizes='100vw'
                style={{height:'160px', width:'auto'}}
                />
            </div>
            <div className='flex flex-col justify-between py-2'>
                <div>
                <h2 className='text-primary-700 font-bold mb-1'>{book.title}</h2>
                <h2 className='font-semibold text-primary-900 mb-10'>{book['author']['name']}</h2>
                </div>
                <Link  href={`/book/${book._id}`}>
                <button className='h-10 w-[105px] rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100
            hover:bg-primary-100 active:border-primary-200 active:bg-primary-200'>Read More</button>
            </Link>


            </div>
        </div>
    </div>
  )
}

export default BookCard