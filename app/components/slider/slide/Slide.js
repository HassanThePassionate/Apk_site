import React from "react";
import Image from "next/image";
import style from "./slide.module.css";

const Slide = ({ id, activeSlide }) => {
  return (
    <div className={style.slide}>
      <div className='lines'>
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`line ${
              activeSlide === id && activeSlide >= index ? "filled" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className='left_slide flex-1'>
        <h2 className='text-[40px] font-bold'>
          Pinch-to-zoom and set your magnification preference for use across
          apps.
        </h2>
      </div>
      <div className='right_slide'>
        <video
          src='https://kstatic.googleusercontent.com/files/4eec0abbde3beb0b8e6980853262dc4fd92bf6b75f68e521c28ffe27add04dce5dd3879c03dd3dd72b4f8b8868593279e27af1f2308e369d04da59bfba7d70e0'
          loop
          muted
          height={600}
          width={600}
          autoPlay
        ></video>
        {/* <Image src='/3.webp' alt='img' height={600} width={600} /> */}
      </div>
    </div>
  );
};

export default Slide;
