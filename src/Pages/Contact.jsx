import React from 'react'
import AboutCard from '../Components/AboutCard'
import { PiArrowElbowRightBold } from 'react-icons/pi'

const Contact = () => {
    return (
        <div className='wrapper mt-6 px-3 xs:px-0 md:px-0 mx-auto'>
            <div className='w-full flex flex-col justify-between xl:flex-row gap-6'>
                <section className='w-full xl:w-[34%] h-[100%]  xl:px-3'>
                    <AboutCard />
                </section>
                <section className='flex flex-col xl:w-[67%] bg-black rounded-2xl p-6 py-4 xl:px-6 '>
                    <div className=' mb-12'>
                        <h1 className='text-white text-[2.5em] font-medium mb-6'>Let's work 👋 <span className='text-[#4770FF]'>Work</span> Together</h1>
                        <p className='text-[#F0F2F5B3] text-lg'>I'm here to help if you're searching for a Front-End developer to bring your idea to code and a websites to help take your business to the next level.</p>
                    </div>
                    <div className='p-3 xl:p-12 bg-[#0E1018] rounded-lg'>
                        <form action="">
                            <div className='flex flex-col md:flex-row justify-between gap-6 text-white w-full mb-6'>
                                <div className='flex flex-col items-start gap-2 w-full px-2'>
                                    <label htmlFor="">Name</label>
                                    <input className='px-6 py-4 bg-black text-[#0E1018] rounded-lg w-full' type="text" placeholder='Enter your name' />
                                </div>
                                <div className='flex flex-col items-start gap-2 w-full px-2'>
                                    <label htmlFor="">Email</label>
                                    <input className='px-6 py-4 bg-black text-[#0E1018] rounded-lg w-full' type="text" placeholder='Enter your name' />
                                </div>
                            </div>
                            <div className='flex flex-col  gap-6 mb-6'>
                                <div className='flex flex-col items-start gap-2 w-full px-2 text-white'>
                                    <label htmlFor="">Subject</label>
                                    <input className='px-6 py-4 bg-black text-[#0E1018] rounded-lg w-full' type="text" placeholder='Enter your subject' />
                                </div>
                                <div className='flex flex-col items-start gap-2 w-full px-2 text-white'>
                                    <label htmlFor="">Message</label>
                                    <textarea style={{ height: '150px' }} className='px-6 py-4 bg-black text-[#0E1018] rounded-lg w-full ' placeholder='Type a message' name="" id=""></textarea>
                                </div>
                            </div>
                            <div className='px-2'>
                                <button className='bg-[#4770FF] text-white w-full flex items-center justify-center gap-1 py-4 px-6 font-medium rounded-lg'>Send message <PiArrowElbowRightBold /></button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact
