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
            <IoChevronDown className={style.icon} />
          </button>
          <div className={style.dropdown}>
            <ul className={style.menu}>
              <li>
                <Link href='#' className={style.menu_link}>
                  Lastest Features
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  AI on Android
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Android 14
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Safety
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Google Messages
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Android Auto
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Quick Share
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <button className='btn'>
            <span>Switch & transfer</span>
            <IoChevronDown className={style.icon} />
          </button>
          <div className={style.dropdown}>
            <ul className={style.menu}>
              <li>
                <Link href='#' className={style.menu_link}>
                  Why Android
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  How to switch
                </Link>
              </li>
              <li>
                <Link href='#' className={style.menu_link}>
                  Transfer your data
                </Link>
              </li>
            </ul>
          </div>
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
