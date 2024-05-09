import React from "react";
import Image from "next/image";
import style from "./card.module.css";
const Card = ({ title, para, img }) => {
  return (
    <div className={style.hero_card}>
      <div className={style.left}>
        <h3>Featured</h3>
        <h2>{title}</h2>
        <p>{para}</p>
        <button className={style.hero_btn}>Read more</button>
      </div>
      <div className={style.right}>
        <Image src={img} alt='img' width={240} height={141} />
      </div>
    </div>
  );
};

export default Card;
