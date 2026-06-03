import React from 'react'
import Image from 'next/image'

import logoImg from '@/assets/logo.svg' 

export const Navbar = () => {
    return (
        <nav className='flex  justify-between  items-center'>
          
            <Image 
                className='cursor-pointer' 
                src={logoImg} 
                alt="logo" 
            />
            <div>
                <ul className='md:flex hidden gap-5 items-center'>
                    <li className='hover:cursor-pointer hover:underline'>products</li>
                    <li  className='hover:cursor-pointer hover:underline'>flavours</li>
                    <li  className='hover:cursor-pointer hover:underline'>moments</li>
                </ul>
            </div>
        </nav>
    )
}