import React from 'react'
import { PiArrowElbowRightBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import InfoSlider from './InfoSlider'

const Talk = ({ service }) => {
    return (
        <div className={` bg-black rounded-2xl w-full ${service ? ' py-6' : 'p-6'} `}>
            {!service && <InfoSlider />}
            <h3 className='text-[2em] md:text-[2.5em] text-[#F0F2F5] font-medium mb-2 flex flex-col'>
                Let's 👋
                <span> Work Together</span>
            </h3>
            <Link className='text-[#4770FF] mt-4 flex items-center'>
                Let's Talk
                <PiArrowElbowRightBold />
            </Link>
        </div>
    )
}

export default Talk
