import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";
const Last_card = () => {
  return (
    <div className='l_card_wrapper'>
      <li>
        <Link href='#' className='card_links'>
          <p className='text-[#5f6368] tracking-[0.5px] text-[16px] font-medium leading-6 '>
            Privacy dashboard
          </p>
          <div className='text-black font-bold text-xl leading-6 py-[2px]'>
            See which apps can access your data.
          </div>
          <FaArrowDown size={24} color='green' />
        </Link>
      </li>
    </div>
  );
};

export default Last_card;
