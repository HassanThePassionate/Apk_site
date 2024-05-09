import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./sm_card.module.css";
const Sm_card = ({ title, para, btn, img, color }) => {
  return (
    <div>
      <div className={`${style.sm_card} `} style={{ background: color }}>
        <Link href='#'>
          <Image
            src={img}
            alt='img'
            width={80}
            height={80}
            className={style.img}
          />
        </Link>
        <div className={`${style.left} min-h-[250px] flex flex-col`}>
          <h2>{title}</h2>
          <p>{para}</p>
          <button
            className={style.hero_btn}
            style={{ marginTop: "auto", maxWidth: "150px" }}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sm_card;
