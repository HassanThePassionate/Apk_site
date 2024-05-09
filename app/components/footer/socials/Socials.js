import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <div className='social flex items-center gap-5 py-[40px]'>
      <span>Follow us</span>
      <div className='social_icons flex items-center gap-5'>
        <FaTwitter size={24} className=' cursor-pointer hover:text-[#4d4949]' />
        <FaInstagram
          size={24}
          className=' cursor-pointer hover:text-[#4d4949]'
        />
        <FaYoutube size={24} className=' cursor-pointer hover:text-[#4d4949]' />
        <FaFacebook
          size={24}
          className=' cursor-pointer hover:text-[#4d4949]'
        />
        <FaLinkedin
          size={24}
          className=' cursor-pointer hover:text-[#4d4949]'
        />
      </div>
    </div>
  );
};

export default Socials;
