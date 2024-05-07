import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { SiEnterprisedb } from "react-icons/si";
import { FaShareAlt } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className='footer_wrapper mt-[40px]'>
      <div className='container'>
        <div className='social flex items-center gap-5 py-[40px]'>
          <span>Follow us</span>
          <div className='social_icons flex items-center gap-5'>
            <FaTwitter
              size={24}
              className=' cursor-pointer hover:text-[#4d4949]'
            />
            <FaInstagram
              size={24}
              className=' cursor-pointer hover:text-[#4d4949]'
            />
            <FaYoutube
              size={24}
              className=' cursor-pointer hover:text-[#4d4949]'
            />
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
        <div className='footer'>
          <ul className='footer_list'>
            <h5>Discover Android</h5>
            <li className='iteam'>
              <LuMenuSquare size={16} />
              <Link href='#'>Lastest Features</Link>
            </li>
            <li className='iteam'>
              <GrAndroid size={16} />
              <Link href='#'>AI on Android</Link>
            </li>
            <li className='iteam'>
              <IoLogoAndroid size={16} />
              <Link href='#'>Android 14</Link>
            </li>
            <li className='iteam'>
              <AiOutlineSafety size={16} />
              <Link href='#'>Safety</Link>
            </li>
            <li className='iteam'>
              <IoAccessibilitySharp size={16} />
              <Link href='#'>Accessibility</Link>
            </li>
            <li className='iteam'>
              <FiMessageSquare size={16} />
              <Link href='#'>Google Messages</Link>
            </li>
            <li className='iteam'>
              <SiEnterprisedb size={16} />
              <Link href='#'>Enterprise</Link>
            </li>
            <li className='iteam'>
              <IoLogoAndroid size={16} />
              <Link href='#'>Android Auto</Link>
            </li>
            <li className='iteam'>
              <FaShareAlt size={16} />
              <Link href='#'>Quick Share</Link>
            </li>
          </ul>
          <ul className='footer_list'>
            <h5>Switch & transfer</h5>
            <li className='iteam'>
              <Link href='#'>Why Android</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>How to switch</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Transfer your data</Link>
            </li>
          </ul>
          <ul className='footer_list'>
            <h5>Explore devices</h5>
            <li className='iteam'>
              <Link href='#'>Phones</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Find your phone</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Tablets</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Connected devices</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
