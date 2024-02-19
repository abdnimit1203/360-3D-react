import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './slider1.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs,Keyboard  } from "swiper/modules";

const SwiperSlider1 = () => {

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs,Keyboard ]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/crndkJx/prope2.jpg" className="aspect-video object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/zGF4r4B/home006.jpg " className="aspect-video object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/tQhSTpv/home001.jpg" className="aspect-video object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/6BhNrC5/prope.jpg" className="aspect-video object-cover" />
        </SwiperSlide>
      </Swiper>
     
    </>
  );
};

export default SwiperSlider1;
