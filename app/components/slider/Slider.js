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
import SlideLines from "./slideline/SlideLines";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5; // Assuming you have 5 slides

  const goNexts = () => {
    swiperInstance && swiperInstance.slideNext();
  };

  const goPrevs = () => {
    swiperInstance && swiperInstance.slidePrev();
  };

  const handleSlideChange = () => {
    if (swiperInstance) {
      setActiveSlide(swiperInstance.activeIndex);
    }
  };

  return (
    <div className='slider_wrapper mt-[80px] w-full'>
      <div className='container'>
        <SlideLines totalSlides={totalSlides} activeSlide={activeSlide} />
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            handleSlideChange();
          }}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: "#nexts",
            prevEl: "#prevs",
          }}
          modules={[Navigation]}
          className='mySwiper'
          style={{ width: "100vw", paddingRight: "652px" }}
        >
          {[...Array(totalSlides)].map((_, index) => (
            <SwiperSlide key={index} style={{ width: "1280px" }}>
              <Slide id={index} activeSlide={activeSlide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Buttons next={goNexts} prev={goPrevs} />
      </div>
    </div>
  );
};

export default Slider;
