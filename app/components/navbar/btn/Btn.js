import React from "react";
import style from "./btn.module.css";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
const Btn = () => {
  return (
    <>
      <div className={style.btn}>
        <Link href='#' className={style.btn_link}>
          <span>
            Shop phones
            <LuArrowRight className={style.arrow_right} />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Btn;
