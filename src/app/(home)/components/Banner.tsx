import React from 'react'
import Image from 'next/image'
import banner from '../../../../public/banner.png'
import books from '../../../../public/books.png'

const Banner = () => {
  return (
    <div className='mx-auto max-w-7xl px-5 py-10'>
        <div className='relative'>
            <Image
            className='rounded-lg h-96 w-full'
            src={banner}
            alt='Banner'
            sizes='100vw'
            />
           <div className='absolute inset-0 h-full w-full rounded-lg '>
            <Image
            className='absolute w-96 h-auto bottom-0 right-5'
            src={books}
            alt='Books Image'
            sizes='100vw'
            />
            <h1 className='absolute top-1/2 left-20 w-full max-w-3xl text-4xl -translate-y-1/2 font-bold tracking-tight '>
                Read Books and Achieve Whatever <br/>you want in your life
            </h1>
            </div> 

        </div>

    </div>
  )
}

export default Banner