import React from "react";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import style from "./menu.module.css";
const Menu = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li>
          <button className={style.btn}>
            <span>Discover Android</span>
          </button>
        </li>
        <li>
          <button className='btn'>
            <span>Switch & transfer</span>
          </button>
        </li>
        <li>
          <button className='btn'>
            <span>Explore devices</span>
            <IoChevronDown className={style.icon} />
          </button>
          <div className={style.dropdown}>
            <ul className={style.menu}>
              <li>
                <Link href='#' className={style.menu_link}>
                  Phones
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Find your phone
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Tablets
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Connected devices
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
