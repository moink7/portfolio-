"use client"






import dynamic from 'next/dynamic'

const Front = dynamic(
  () => import('@/pages/Front'),
  { ssr: false }
)
import NavbarDemo from '@/pages/NavbarDemo';
import React from 'react'
import {Suspense} from "react";


const page = () => {
  return (
    <div className='overflow-x-hidden'>
    <Suspense fallback={<>Loading...</>}>
      <Front />
    </Suspense>
    </div>
    
    
  )
}

export default page