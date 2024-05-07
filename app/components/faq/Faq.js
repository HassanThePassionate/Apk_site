"use client";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Faq = ({ title, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faq_wrap cursor-pointer hover:bg-[#ddd] transition-all '>
      <div className='faq ' onClick={toggleFaq}>
        <h4 className='text-[18px]'>{title}</h4>
        <FiPlus
          size={24}
          className={`cursor-pointer ${isOpen ? "hidden" : ""}  `}
        />
        <RxCross2
          size={24}
          className={`cursor-pointer ${isOpen ? "" : "hidden"}`}
        />
      </div>
      <p className={`pt-[20px] w-[80%] ${isOpen ? "" : "hidden"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
        nostrum? Possimus, sapiente aut voluptates doloribus ut assumenda
        voluptas blanditiis earum nisi. Pariatur qui quasi eaque ex animi
        temporibus molestiae nesciunt nisi non dolore, sequi, quo aliquam vel
        alias deserunt dicta, maiores laboriosam doloribus dolorem autem
      </p>
    </div>
  );
};

export default Faq;
