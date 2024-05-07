import React from "react";
import Image from "next/image";
const Card = ({ title, para, img }) => {
  return (
    <div className='hero_card'>
      <div className='left'>
        <h3>Featured</h3>
        <h2>{title}</h2>
        <p>{para}</p>
        <button className='hero_btn'>Read more</button>
      </div>
      <div className='right'>
        <Image src={img} alt='img' width={240} height={141} />
      </div>
    </div>
  );
};

export default Card;
