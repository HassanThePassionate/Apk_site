import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { LuArrowRight } from "react-icons/lu";
const Navbar = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <div className=' header_container container '>
          <Link href='/' className='logo'>
            <Image
              src='https://lh3.googleusercontent.com/P5QMyNHTevjUPkQYYC1bo5-gBdJkwOqgXpIwL80JgIm4CO-yzK32OOX3pr7y8b9YNhXQZotdsgD7JLolmWZx5BkvEvZwofL7I8CLHBOINY5O09KlrQ=rwa-s0'
              alt='img'
              width={104}
              height={8}
            />
          </Link>
          <nav className='navbar'>
            <ul className='list'>
              <li>
                <button className='btn'>
                  <span>Discover Android</span>
                  <IoChevronDown className='icon' />
                </button>
                <div className='dropdown'>
                  <ul className='menu'>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        AI on Android
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Android 14
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Safety
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Accessibility
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Google Messages
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Android Auto
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Quick Share
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button className='btn'>
                  <span>Switch & transfer</span>
                  <IoChevronDown className='icon' />
                </button>
                <div className='dropdown'>
                  <ul className='menu'>
                    <li>
                      <Link href='#' className='menu_link'>
                        Why Android
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        How to switch
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Transfer your data
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button className='btn'>
                  <span>Explore devices</span>
                  <IoChevronDown className='icon' />
                </button>
                <div className='dropdown'>
                  <ul className='menu'>
                    <li>
                      <Link href='#' className='menu_link'>
                        Phones
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Find your phone
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Tablets
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Connected devices
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <form className='form'>
            <button className='search_btn'>
              <ImSearch className='search' />
            </button>
            <input type='search' placeholder='search' className='input' />
            <button className='cross_btn'>
              <RxCross2 className='cross' />
            </button>
          </form>
          <div className='shop_btn'>
            <Link href='#' className='btn_link'>
              <span>
                Shop phones
                <LuArrowRight className='arrow_right' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
