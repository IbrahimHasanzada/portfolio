import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function WorkComponent() {
  const work = [
    { name: 'AIESEC', year: '2022-2023', img: 'AIESEC-Logo.png' },
    { name: 'GDSC', year: '2023-2024', img: 'google-developers-logo.png' },
    { name: 'PlaceMent Dost', year: 'Currently', img: 'placement-logos.png' },
    { name: 'AIESEC', year: '2022-2023', img: 'AIESEC-Logo.png' },
    { name: 'GDSC', year: '2023-2024', img: 'google-developers-logo.png' },
    { name: 'PlaceMent Dost', year: 'Currently', img: 'placement-logos.png' },
  ]
  return (
    <div className='h-[220px]'>
      <Swiper
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {work.map((item, i) => (
          <SwiperSlide key={i} className='custom-slide '>
            <div className='flex flex-col justify-start  items-start gap-2 xs:flex-row xs:items-center xs:justify-between w-full mt-3 text-[#F0F2F5B3]'>
              <div className='text-sm text-start w-[30%] font-medium'>
                {item.year}
              </div>
              <div className='flex items-center gap-3 w-full xs:w-[50%]'>
                <div className='w-10 h-10 bg-[#0e1018] rounded-lg flex justify-center items-center'>
                  <img
                    style={{ width: "80%", height: "80%", objectFit: "contain" }}
                    src={`/img/${item.img}`}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <h3 className='font-medium text-base text-nowrap'>{item.name}</h3>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
