'use client';
import React from 'react'

const DownloadButton = ({fileLink}:{fileLink:string}) => {
    const handleDownload = ()=>{
        window.open(fileLink,'_blank')

    }
  return (
    <button 
    onClick={handleDownload}
    className='h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:border-primary-600
            hover:bg-primary-700 active:border-primary-200 active:bg-primary-200'>Download The E-book</button>
  )
}

export default DownloadButton