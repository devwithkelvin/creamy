'use client'
import React, { useEffect, useState } from 'react'
import { hero_img } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'

export const Hero = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section>
            <div className='md:flex mt-24 items-center xs:flex-col gap-5'>

          
                <div className='relative p-2 space-y-5'>
                    <div className='relative z-10 space-y-5'>

                        <small className={`text-primary text-lg md:text-sm md:p-6 p-2 block transition-all duration-500 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Creamie Desserts
                        </small>

                        <h1 className={`text-4xl md:text-3xl lg:text-4xl font-bold mt-4 md:mt-6 leading-tight text-primary transition-all duration-500 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Taste The Feeling Of Freshly Prepared Ice-creams.
                        </h1>

                        <p className={`text-primary font-light text-lg md:text-md md:mt-4 mt-6 transition-all duration-500 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            Feel the freshness of finely prepared desserts that suits you. We prepare blends of desserts that suits our clients, welcome
                        </p>

                        <div className={`flex mt-4 md:mt-6 gap-3 transition-all duration-500 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <button className='bg-primary flex items-center text-md md:text-sm gap-2 text-white border-black border px-3 py-2 md:px-6 md:py-3 rounded-xs'>
                                <span>Explore Menu</span>
                                <ArrowUpRight size={16} />
                            </button>
                            <button className='bg-transparent border border-primary text-md md:text-sm px-3 py-2 md:px-6 md:py-3 rounded-xs'>
                                Make Order
                            </button>
                        </div>

                    </div>
                </div>

     
                <img className={`w-150 transition-all duration-700 delay-300 ease-out ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`} src={hero_img.src} alt="" />

            </div>


            <div className={`w-full bg-primary p-8 transition-all duration-500 delay-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className='md:flex justify-between items-center text-background'>

                   
                    <div className='flex flex-col gap-2 p-4'>
                        <div className='flex gap-1'>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className='text-yellow-400 text-xl'>★</span>
                            ))}
                        </div>
                        <p className='text-xs font-bold'>4.9 out of 5</p>
                        <p className='text-xs opacity-70'>From 20+ happy customers</p>
                    </div>

           
                    <div className='hidden md:block h-16 w-px bg-background opacity-30' />

                
                    <p className='md:max-w-100 text-xs md:p-6 text-left xs:text-center p-4'>
                        Come for the cones, stay for the smiles! Step into our bright, family-friendly parlor and treat yourself to our rotating menu of dairy-free options, rich milkshakes, and warm waffle bowls. We're on a mission to bring pure happiness to every bite.
                    </p>

                </div>
            </div>
        </section>
    )
}