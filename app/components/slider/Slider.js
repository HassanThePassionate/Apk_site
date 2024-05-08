"use client";
import React, { useState } from "react";
import Slide from "./slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Buttons from "./button/Buttons";
const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const goNexts = () => {
    swiperInstance && swiperInstance.slideNext();
  };

  const goPrevs = () => {
    swiperInstance && swiperInstance.slidePrev();
  };
  return (
    <div className='slider_wrapper mt-[80px] w-full'>
      <div className='container'>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          modules={[Navigation]}
          className='mySwiper'
        >
          <div className='sliders'>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          </div>
          <Buttons next={goNexts} prev={goPrevs} />
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
