import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer_wrapper'>
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
            <h5>Privacy & Safety</h5>
            <li className='iteam'>
              <Link href='#'>Security</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Privacy</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Physical Safety</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Find my Device</Link>
            </li>
          </ul>
          <ul className='footer_list'>
            <h5>Accessibility</h5>
            <li className='iteam'>
              <Link href='#'>Security</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Privacy</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Physical Safety</Link>
            </li>
          </ul>
          <ul className='footer_list'>
            <h5>More from Android</h5>
            <li className='iteam'>
              <Link href='#'>Security</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Privacy</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Physical Safety</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Find my Device</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Find my Device</Link>
            </li>
          </ul>
          <ul className='footer_list'>
            <h5>Support</h5>
            <li className='iteam'>
              <Link href='#'>Security</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Privacy</Link>
            </li>
            <li className='iteam'>
              <Link href='#'>Physical Safety</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
