import React from "react";
import style from "./slideLines.module.css";
const SlideLines = ({ totalSlides, activeSlide }) => {
  const lines = [];
  for (let i = 0; i < totalSlides; i++) {
    lines.push(
      <div
        key={i}
        className={`slide-line ${
          activeSlide === i ? "bg-black" : "bg-[#DADCE0]"
        } h-[3px] rounded-lg w-20 relative top-12 z-20 left-14`}
      ></div>
    );
  }
  return <div className={style.slide_lines}>{lines}</div>;
};

export default SlideLines;
