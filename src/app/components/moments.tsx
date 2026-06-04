'use client'
import React, { useState, useEffect, useRef } from 'react'
import { moment_1, moment_2, moment_3, moment_4 } from '@/assets/assets'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const Moments = () => {
  const images = [moment_1, moment_2, moment_3, moment_4]
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)
  const [sliding, setSliding] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const containerRef = useRef<HTMLDivElement>(null)

  // Mounting animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const navigate = (dir: 'left' | 'right') => {
    if (sliding) return
    setDirection(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'right'
          ? (prev + 1) % images.length
          : (prev - 1 + images.length) % images.length
      )
      setSliding(false)
    }, 300)
  }

  const visibleImages = [0, 1, 2].map(offset => images[(current + offset) % images.length])

  return (
    <div
      className={`bg-[#D4956A] p-8 md:p-12 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
     
      <div className='flex justify-between items-start mb-6'>
        <div className='max-w-sm'>
          <h2 className='text-2xl md:text-3xl text-center font-bold text-primary mb-2'>Real moments, real taste</h2>
          <p className='text-sm font-light'>
            Start with vanilla, chocolate, or a seasonal cream. This is the foundation of everything.
          </p>
        </div>
     
        <div className='hidden md:flex gap-2'>
          <div className='w-6 h-6 rounded-full border-2 border-primary' />
          <div className='w-6 h-6 rounded-full border-2 border-primary' />
        </div>
      </div>


      <div
        ref={containerRef}
        className={`flex gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
          sliding
            ? direction === 'right'
              ? '-translate-x-4 opacity-60'
              : 'translate-x-4 opacity-60'
            : 'translate-x-0 opacity-100'
        }`}
      >
        {visibleImages.map((img, i) => (
          <div
            key={`${current}-${i}`}
            className='flex-1 min-w-0 rounded-lg overflow-hidden'
          >
            <img
              src={img.src}
              alt={`moment ${i}`}
              className='w-full h-48 md:h-64 object-cover'
            />
          </div>
        ))}
      </div>


      <div className='flex justify-between items-center mt-6'>

        <div className='flex gap-2'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 'right' : 'left')
                setSliding(true)
                setTimeout(() => { setCurrent(i); setSliding(false) }, 300)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary scale-110' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>

   
        <div className='flex gap-3'>
          <button
            onClick={() => navigate('left')}
            className='w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200'
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => navigate('right')}
            className='w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200'
          >
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  )
}