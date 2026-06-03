import React from 'react'
import { hero_img } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'

export const Hero = () => {
  return (
    <div className='md:flex p-2 mt-4  items-center xs:flex-col gap-5'>
        <div className='p-2 space-y-5'>
            <small className='text-primary text-lg md:text-sm md:p-6  p-2'>Cremie Desserts</small>
        <h1 className='text-4xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-6 leading-tight text-primary'>Taste The Feeling Of Freshly Prepared Ice-creams.</h1>
        <p className='text-primary font-light text-lg md:text-md md:mt-4 mt-6'>Feel the freshness of finely prepared desserts that suits you. We perpare blends of desserts that suits our clients, welcome</p>
<div className='flex mt-4 md:mt-6 justify-center gap-5 md:gap-3'>
  <button className='bg-primary flex items-center text-md md:text-sm gap-2 text-white border-black border px-3 py-2 md:px-6 md:py-3 rounded-xs'>
    <span>Explore Menu</span>
    <ArrowUpRight size={16} />
  </button>
  <button className='bg-transparent border border-primary text-md md:text-sm px-3 py-2 md:px-6 md:py-3 rounded-xs'>
    Make Order
  </button>
</div>
        </div>
      <img className='w-150' src={hero_img.src} alt="" />
    </div>
  )
}

