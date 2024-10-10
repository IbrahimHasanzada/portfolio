import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Services = ({ home }) => {
    const services = [
        { name: 'Optimizating', img: 'app.svg' },
        { name: 'RWD', img: 'rwd-design.svg' },
        { name: 'SEO', img: 'seo.svg' },
        { name: 'API Integration', img: 'web-optimization.svg' },
        { name: 'Animation', img: 'rwd-design.svg ' },
        { name: 'Code auditing', img: 'app.svg' },
        { name: 'Interactive UI', img: 'view.svg' },
        { name: 'Debbugging', img: 'web-optimization.svg' },
    ]
    return (
        <div className='mt-6 px-3 w-full'>
            <div className='bg-black rounded-2xl'>
                <div className={`bg-black rounded-2xl  ${home && 'p-6'}`}>
                    <h3 className='w-full flex justify-between flex-col-reverse md:flex-row  gap-6 px-3 text-[#F0F2F5] text-2xl'>
                        <span className={`font-medium ${!home && 'text-3xl xl:text-4xl'}`}>Services | <span className={`${home ? 'text-white' : 'text-[#4770FF]'}`}>Offered</span></span>
                        {home ?
                            <Link className='text-[#4770FF] flex items-center text-base'>See All Services <IoArrowForward /></Link>
                            :
                            <div className='py-2 px-4 bg-[#0E1018] flex items-center gap-2 rounded-lg '>
                                <div className="pulsating-circle mt-3"></div>
                                <p className='text-[#4770FF] text-lg font-medium'>Avialable For Hire</p>
                            </div>
                        }
                    </h3>
                    {!home &&
                        <div className='max-w-lg mt-6 mb-10 px-3'>
                            <p className='text-[#F0F2F5B3] text-lg xl:text-2xl font-medium'>
                                Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert
                                <span className='text-white'> Product Design and Development </span>
                                Services!
                            </p>
                        </div>}
                    <div className='w-full'>
                        <div className='flex flex-wrap'>
                            {services.slice(0, home ? 4 : services.length).map((item, i) => (
                                <div key={i} className='mt-6 px-3 w-[50%] md:w-[25%]'>
                                    <div className='px-[10px] md:px-4 pb-6 pt-4 bg-[#0E1018] rounded-2xl text-center align-middle'>
                                        <div className='px-[14px] py-[25px] bg-black rounded-lg flex justify-center items-center'>
                                            <img src={`/img/${item.img}`} alt={`img-${i}`} />
                                        </div>
                                        <h3 className='mt-4 text-[#F0F2F5B3] font-medium'>{item.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
