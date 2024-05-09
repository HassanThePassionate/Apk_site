import React from "react";
import { ImSearch } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import style from "./form.module.css";
const Form = () => {
  return (
    <form className={style.form}>
      <button className={style.search_btn}>
        <ImSearch className={style.search} />
      </button>
      <input type='search' placeholder='search' className={style.input} />
      <button className={style.cross_btn}>
        <RxCross2 className={style.cross} />
      </button>
    </form>
  );
};

export default Form;
