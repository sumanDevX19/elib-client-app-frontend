import { SkeletonCard } from '@/components/ui/SkeletonCard'
import React from 'react'

const Loader = () => {
  return (
    <div className='max-w-7xl grid grid-cols-3 gap-y-3 gap-3 mx-auto px-5 py-10'>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
        <SkeletonCard/>
    </div>
  )
}

export default Loader