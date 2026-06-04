import React from 'react'
import { ice_3 } from '@/assets/assets'
import { ArrowRight } from 'lucide-react'

export const Limited = () => {
  const steps = [
    {
      id: 0,
      title: "Pick your base",
      par: "Start with vanilla, chocolate, or a seasonal cream. This is the foundation of everything."
    },
    {
      id: 1,
      title: "Add your mix-ins",
      par: "Nuts, fruit, candy, spice. Layer in what you love. We'll fold it in by hand."
    },
    {
      id: 2,
      title: "Finish with a swirl",
      par: "Start with vanilla, chocolate, or a seasonal cream. This is the foundation of everything."
    },
  ]

  return (
    <div className='p-8 md:p-16'>


      <div className='flex flex-col items-center text-center mb-12'>
        <p className='text-sm mb-2'>Limited</p>
        <h3 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
          Build your own frozen dream
        </h3>
        <p className='text-sm font-light max-w-sm'>
          Choose your base. Add your mix-ins. Finish with a swirl. We'll make it, pack it, ship it. All yours.
        </p>
        <button className='bg-primary text-white flex items-center gap-3 px-8 py-3 mt-6 text-sm rounded-xs'>
          Build now <ArrowRight size={16} />
        </button>
      </div>

     
      <div className='flex flex-col md:flex-row gap-10 items-center'>

        {/* Steps */}
        <div className='flex-1 flex flex-col gap-8'>
          {steps.map((step) => (
            <div key={step.id} className='border-b border-gray-200 pb-6'>
              <h4 className='text-lg font-semibold text-primary mb-2'>{step.title}</h4>
              <p className='text-sm font-light max-w-sm'>{step.par}</p>
            </div>
          ))}
        </div>

        <div className='flex-1 flex items-center justify-center relative'>
          <div className='absolute md:w-130 h-90 w-90 md:h-110 bg-[#8B4513] rounded-full opacity-80' />
          <img
            src={ice_3.src}
            alt="ice cream"
            className='relative z-10 w-72 md:w-96 object-cover rounded-sm'
          />
        </div>

      </div>
    </div>
  )
}