import Link from 'next/link'
import React from 'react'
import book from '../../public/book.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='border-b-[0.5px] border-zinc-400'>
        <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-2 '>
        <div>
            <Link href={'/'}>
            <div className='flex items-center gap-1'>
                <div>
                    <Image
                    className='w-12 relative'
                    src={book}
                    alt='Book Logo'
                    />
                </div>
                <div className='text-xl font-bold uppercase  tracking-tighter text-primary-500' >
                    Book Marker
                </div>
            </div>

            </Link>
        </div>
        <div className='flex items-center gap-2'>
            <button className='h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100
            hover:bg-primary-100 active:border-primary-200 active:bg-primary-200'>Sign In</button>
            <button className='h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:border-primary-600
            hover:bg-primary-700 active:border-primary-200 active:bg-primary-200'>Sign Up</button>

        </div>
            
        </div>
    </nav>
  )
}

export default Navbar