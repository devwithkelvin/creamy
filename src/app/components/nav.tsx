import React from 'react'
import Image from 'next/image'
import logoImg from '@/assets/logo.svg'

export const Navbar = () => {
    return (
        <nav className='fixed flex top-0 left-0 right-0 z-50 justify-between p-4 border-b border-gray-200 items-center bg-background'>

            <Image
                id='#'
                className='cursor-pointer sm:w-24'
                src={logoImg}
                alt="logo"
            />
            <div>
                <ul className='md:flex hidden gap-5 items-center'>
                    <li className='hover:cursor-pointer hover:underline'>products</li>
                    <li className='hover:cursor-pointer hover:underline'>flavours</li>
                    <li className='hover:cursor-pointer hover:underline'>moments</li>
                </ul>
            </div>
        </nav>
    )
}