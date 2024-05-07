import Image from "next/image";
import React from "react";

const T_Card = () => {
  return (
    <div className='t_card bg-white'>
      <div className='left'>
        <h3>NEW</h3>
        <h2>Media apps</h2>
        <p>
          Learn how to build and extend engaging media experiences to users
          across Android's multidevice ecosystem.
        </p>
        <button className='hero_btn btm'>Learn more</button>
      </div>
      <div className='right'>
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
