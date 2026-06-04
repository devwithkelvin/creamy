import React from 'react'
import { ArrowUpRight } from "lucide-react"
import { logo_img, ice_1, ice_2, ice_3,ice_4 } from '@/assets/assets'

export const Features = () => {
    return (
        <div className='p-6'>

   
            <div className='flex items-center justify-center w-full mb-8'>
                <img src={logo_img.src} alt="logo" />
            </div>


            <section className='flex flex-col md:flex-row items-end-safe justify-center gap-10 p-4'>
                
              
                <div className='flex flex-col gap-6 flex-1'>
                    <h2 className='text-3xl md:text-4xl font-bold leading-tight text-primary'>
                        The artisan way, no compromise
                    </h2>
                    <p className='text-primary font-light text-sm md:text-base'>
                        We source from farms we know. We use dairy from grass-fed herds. We never cut corners with stabilizers or shortcuts.
                    </p>
                    <button className='bg-primary flex items-center w-fit gap-2 text-white border border-black px-6 py-3 text-sm rounded-xs'>
                        <span>Learn More</span>
                        <ArrowUpRight size={16} />
                    </button>

         
                <div className='flex gap-4 mt-8 w-full'>
    <img className='w-1/2 object-contain' src={ice_2.src} alt="ice cream 1" />
    <img className='w-1/2 object-contain' src={ice_4.src} alt="ice cream 2" />
</div>
                </div>

                <div className='flex-1 flex justify-center'>
                    <img className='w-full max-w-sm object-contain' src={ice_3.src} alt="ice cream 3" />
                </div>

            </section>
        </div>
    )
}