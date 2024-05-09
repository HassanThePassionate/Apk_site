import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./logo.module.css";
const Logo = () => {
  return (
    <div>
      <Link href='/' className={style.logo}>
        <Image
          src='https://lh3.googleusercontent.com/P5QMyNHTevjUPkQYYC1bo5-gBdJkwOqgXpIwL80JgIm4CO-yzK32OOX3pr7y8b9YNhXQZotdsgD7JLolmWZx5BkvEvZwofL7I8CLHBOINY5O09KlrQ=rwa-s0'
          alt='img'
          width={104}
          height={8}
        />
      </Link>
    </div>
  );
};

export default Logo;
