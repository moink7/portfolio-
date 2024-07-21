"use client"
import { WavyBackground } from "../components/ui/wavy-background";
import { BsArrowDownShort } from "react-icons/bs";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { FaArrowRight } from "react-icons/fa6";

import { useSearchParams } from "next/navigation";
import { NavHashLink as Link } from "react-router-hash-link";




import Contact from '@/pages/Contact'
import Hero from '@/pages/Hero'
import NavbarDemo from '@/pages/NavbarDemo'
import Projects from '@/pages/Projects'
import Technologies from '@/pages/Technologies'

import '@fontsource/inter';


import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const page = () => {
    const searchParams = useSearchParams();

  return (
    <BrowserRouter>
    <div>
    <div className='ḥ-auto  w-full  flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 scroll-smooth'>
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full overflow-x-hidden">
            
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var overflow-hidden">Hey Folks, I'm Moin. 👋</p>
            <p className="text-base md:text-lg mt-4 mb-4 text-white font-normal inter-var text-center">Welcome to my Portfolio, To know more about me...</p>
            <div className="mt-4 overflow-x-hidden">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-black text-white flex justify-center items-center space-x-3 overflow-x-hidden"
                >
                    <Link to='#heroo' smooth className="flex items-center justify-center">
                            Click to Proceed <FaArrowRight />
                    </Link>
                </HoverBorderGradient>
            </div>
            
            
        </WavyBackground>
        </div>
        <NavbarDemo />
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
        
    </div>
    </BrowserRouter>
  )
}

export default page