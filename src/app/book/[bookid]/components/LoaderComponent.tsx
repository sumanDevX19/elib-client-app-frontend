import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const LoaderComponent = () => {
  return (
    <Skeleton className="w-[100px] h-[20px] rounded-full" />
  )
}

export default LoaderComponent