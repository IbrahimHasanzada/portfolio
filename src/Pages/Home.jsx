import React from 'react'
import AboutCard from '../Components/AboutCard'
import WorkComponent from '../Components/WorkComponent'
import { Link } from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Services from '../Components/Services';
import Talk from '../Components/Talk';

const Home = () => {
  return (
    <div className='wrapper px-3 xs:px-0 md:px-0 mx-auto'>
      <div className='w-full flex flex-col justify-between xl:flex-row'>
        <section className='w-full h-[100%] xl:w-[33%] mt-6 xl:px-3'>
          <AboutCard />
        </section>
        <section className='w-full xl:w-[66%] mt-6 flex flex-col xl:flex-row'>
          <div className='md:px-3 xl:w-[50%]'>
            <div className='p-6 bg-black rounded-2xl h-[300px]'>
              <h3 className='mb-2 text-2xl text-[#F2F0F5] font-semibold'>Work Experience</h3>
              <WorkComponent />
            </div>
            <div className='p-6 bg-black rounded-2xl mt-6'>
              <h3 className='mb-2 text-2xl text-[#F2F0F5] font-semibold'>My Expert Area</h3>
              <Skills />
            </div>
          </div>
          <section className='md:px-3 xl:w-[50%]  mt-6 xl:mt-0'>
            <div className='p-6 bg-black h-full rounded-2xl'>
              <div className='mb-2 flex flex-col gap-2 md:flex-row justify-between'>
                <h3 className='text-2xl font-medium text-[#F0F2F5]'>Recent Projects</h3>
                <Link className='text-[#4770FF] flex items-center'>All Projects <IoArrowForward /></Link>
              </div>
              <div>
                <Projects />
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className='xl:w-full flex flex-col xl:flex-row'>
        <Services home={true} />
        <div className='mt-6  xl:w-[33%]'>
          <Talk />
        </div>
      </section>
    </div>
  )
}

export default Home
