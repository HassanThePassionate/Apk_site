import Image from "next/image";
import React from "react";
import style from "../card/card.module.css";
const T_Card = () => {
  return (
    <div className={`${style.t_card} bg-white`}>
      <div className={style.left}>
        <h3>NEW</h3>
        <h2>Media apps</h2>
        <p>
          Learn how to build and extend engaging media experiences to users
          across Android&apos;s multidevice ecosystem.
        </p>
        <button className={`${style.hero_btn} ${style.btm}`}>Learn more</button>
      </div>
      <div className={style.right}>
        <Image
          src='https://developer.android.com/static/images/cluster-illustrations/enhance-media-16-9.svg'
          alt='img'
          width={133}
          height={78}
        />
      </div>
    </div>
  );
};

export default T_Card;
