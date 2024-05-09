import Link from "next/link";
import React from "react";
import { GrAndroid } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { SiEnterprisedb } from "react-icons/si";
import { FaShareAlt } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import style from "./footer.module.css";
import Socials from "./socials/Socials";
const Footer = () => {
  return (
    <footer className='footer_wrapper bg-[#F1F3F4] mt-[80px]'>
      <div className='container'>
        <Socials />
        <div className={style.footer}>
          <ul className={style.footer_list}>
            <h5>Discover Android</h5>
            <li className={style.iteam}>
              <LuMenuSquare size={16} />
              <Link href='#'>Lastest Features</Link>
            </li>
            <li className={style.iteam}>
              <GrAndroid size={16} />
              <Link href='#'>AI on Android</Link>
            </li>
            <li className={style.iteam}>
              <IoLogoAndroid size={16} />
              <Link href='#'>Android 14</Link>
            </li>
            <li className={style.iteam}>
              <AiOutlineSafety size={16} />
              <Link href='#'>Safety</Link>
            </li>
            <li className={style.iteam}>
              <IoAccessibilitySharp size={16} />
              <Link href='#'>Accessibility</Link>
            </li>
            <li className={style.iteam}>
              <FiMessageSquare size={16} />
              <Link href='#'>Google Messages</Link>
            </li>
            <li className={style.iteam}>
              <SiEnterprisedb size={16} />
              <Link href='#'>Enterprise</Link>
            </li>
            <li className={style.iteam}>
              <IoLogoAndroid size={16} />
              <Link href='#'>Android Auto</Link>
            </li>
            <li className={style.iteam}>
              <FaShareAlt size={16} />
              <Link href='#'>Quick Share</Link>
            </li>
          </ul>
          <ul className={style.footer_list}>
            <h5>Switch & transfer</h5>
            <li className={style.iteam}>
              <Link href='#'>Why Android</Link>
            </li>
            <li className={style.iteam}>
              <Link href='#'>How to switch</Link>
            </li>
            <li className={style.iteam}>
              <Link href='#'>Transfer your data</Link>
            </li>
          </ul>
          <ul className={style.footer_list}>
            <h5>Explore devices</h5>
            <li className={style.iteam}>
              <Link href='#'>Phones</Link>
            </li>
            <li className={style.iteam}>
              <Link href='#'>Find your phone</Link>
            </li>
            <li className={style.iteam}>
              <Link href='#'>Tablets</Link>
            </li>
            <li className={style.iteam}>
              <Link href='#'>Connected devices</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
