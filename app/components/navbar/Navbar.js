import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className='header'>
      <div className='header_wrapper'>
        <div className='container'>
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
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
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
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
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
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                    <li>
                      <Link href='#' className='menu_link'>
                        Lastest Features
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
