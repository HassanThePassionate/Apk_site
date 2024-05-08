import React from "react";

const SlideLines = ({ totalSlides, activeSlide }) => {
  const lines = [];
  for (let i = 0; i < totalSlides; i++) {
    lines.push(
      <div
        key={i}
        className={`slide-line ${
          activeSlide === i ? "bg-black" : "bg-[#DADCE0]"
        } h-[3px] w-20 relative top-12 z-20  left-14`}
      ></div>
    );
  }
  return <div className='slide-lines flex items-center gap-2'>{lines}</div>;
};

export default SlideLines;
