import React from "react";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Form from "./form/Form";
import Btn from "./btn/Btn";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={`${style.header_container}   container `}>
          <Logo />
          <Menu />
          <Form />
          <Btn />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
