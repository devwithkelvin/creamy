import React from 'react'
import logoImg from '@/assets/logo.svg'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='bg-primary text-background px-8 md:px-16 py-12'>

      {/* Top */}
      <div className='flex flex-col md:flex-row justify-between gap-10 mb-12'>

        {/* Brand */}
        <div className='flex flex-col gap-4 max-w-xs'>
          <Image src={logoImg} alt="logo" />
          <p className='text-sm font-light opacity-70'>
            Handcrafted ice cream made with real ingredients. Small batches, big flavours.
          </p>
        </div>

        {/* Links */}
        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-sm mb-2'>Explore</p>
          {['Products', 'Flavours', 'Moments', 'Build Your Own'].map((link) => (
            <a key={link} href='#' className='text-sm opacity-70 hover:opacity-100 transition'>
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <p className='font-semibold text-sm mb-2'>Contact</p>
          <p className='text-sm opacity-70'>hello@kelvin.com</p>
          <p className='text-sm opacity-70'>+1 (800) 123 4567</p>
          <p className='text-sm opacity-70'>Nairobi, Kenya</p>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col gap-3 max-w-xs'>
          <p className='font-semibold text-sm mb-2'>Stay in the loop</p>
          <p className='text-sm opacity-70'>Get notified when new flavours drop.</p>
          <div className='flex'>
            <input
              type='email'
              placeholder='your@email.com'
              className='bg-background text-primary text-sm px-4 py-2 flex-1 outline-none'
            />
            <button className='bg-background text-primary px-3 py-2 hover:opacity-80 transition'>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className='border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-xs opacity-50'>© 2026 Devwithkelvin. All rights reserved.</p>
        <div className='flex gap-6'>
          {['Privacy Policy', 'Terms of Use'].map((item) => (
            <a key={item} href='#' className='text-xs opacity-50 hover:opacity-100 transition'>
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  )
}