import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoSlider = () => {
    const info = [
        'Available For Hire🚀 Crafting Digital Experiences🎨 ',
        'Available For Hire🚀 Crafting Digital Experiences🎨 ',
        'Available For Hire🚀 Crafting Digital Experiences🎨 ',
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear'
    };

    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                {[...info, ...info].map((item, i) => (
                    <div key={i} className='mr-2 bg-[#0E1018] py-4'>
                        <h3 className='whitespace-nowrap inline-block mr-2 text-[#576076]'>{item}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default InfoSlider;
