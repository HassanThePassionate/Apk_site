import React from "react";
import style from "../../sm_card/small_card/sm_card.module.css";
import styles from "./thumb_card.module.css";
import Link from "next/link";
import Image from "next/image";
const Thumb_Card = ({ title, img, para }) => {
  return (
    <>
      <div className={`${styles.t_card} bg-[#D1E3FC]`}>
        <Link href='#'>
          <Image src={img} className={style.img} width={80} height={80} />
        </Link>
        <div className={`${style.left} flex flex-col min-h-[320px]`}>
          <h2>{title}</h2>
          <p>{para}</p>

          <button
            className={`${style.hero_btn} hover:bg-black hover:text-white `}
            style={{ marginTop: "auto", maxWidth: "150px" }}
          >
            Discover How
          </button>
        </div>
      </div>
    </>
  );
};

export default Thumb_Card;
