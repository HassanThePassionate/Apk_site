import React from "react";
import Image from "next/image";

const Slide = ({ id, activeSlide }) => {
  return (
    <div className='slide'>
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
        <Image src='/3.webp' alt='img' height={600} width={600} />
      </div>
    </div>
  );
};

export default Slide;
