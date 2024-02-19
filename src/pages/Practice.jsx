import React from 'react';
import SwiperSlider1 from '../components/Sliders/SwiperSlider1';
import Head from '../components/Extra/Head';

const Practice = () => {
    return (
        <div className='relative'>
            <div className='absolute z-10 w-[80%] ml-20'>

            <Head/>
            
            </div>
            <SwiperSlider1/>
        </div>
    );
};

export default Practice;