import React from 'react'
import { f_01, f_02, f_03 } from '@/assets/assets'

export const Flavours = () => {
    const arr = [
        { id: 0, img: f_01, title: "Burnt honey and black sesame", par: "Smoky, nutty, complex" },
        { id: 1, img: f_02, title: "Burnt honey and black sesame", par: "Smoky, nutty, complex" },
        { id: 2, img: f_03, title: "Burnt honey and black sesame", par: "Smoky, nutty, complex" },
    ]

    return (
        <div className='p-6'>
            <p className='text-center w-full mb-2 text-xl'>flavoured</p>
            <h2 className='text-center w-full mb-2 text-3xl md:text-4xl font-bold leading-tight text-primary'>
                This season's flavours
            </h2>
            <p className='text-center font-normal text-sm max-w-md mx-auto mb-6'>
                These drops won't last. Each batch is small. Each flavor is seasonal. Order now or wait until next time.
            </p>

            {/* Grid — 1 col mobile, 3 col md+ */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-3'>
                {arr.map((item) => (
                    <div key={item.id} className='bg-[#FBE3E3] p-2 rounded-xs'>
                        <img className='w-full object-cover' src={item.img.src} alt={item.title} />
                        <div className='p-4'>
                            <h3 className='text-center font-semibold text-xl'>{item.title}</h3>
                            <p className='text-sm font-light text-center p-2'>{item.par}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Centered button */}
            <div className='flex justify-center mt-6'>
                <button className='bg-primary text-white px-6 py-3 text-sm rounded-xs border border-black'>
                    View All
                </button>
            </div>
        </div>
    )
}