import React from 'react'
import AboutCard from '../Components/AboutCard'
import Services from '../Components/Services'
import Talk from '../Components/Talk'

const Service = () => {
  return (
    <div className='wrapper px-3 xs:px-0 md:px-0 mx-auto mt-6'>
      <div className='w-full flex flex-col justify-between xl:flex-row gap-6'>
        <section className='w-full xl:w-[34%] h-[100%]  xl:px-3'>
          <AboutCard />
        </section>
        <div className='flex flex-col xl:w-[67%] bg-black rounded-2xl py-4 xl:px-6 '>
          <Services />
          <div className='w-full px-3 md:px-5'>
            <Talk service={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
