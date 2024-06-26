import React from "react";
import Card from "./card/Card";
import T_Card from "./t_cards/T_Card";
import Testmoinal from "./testmoinal/Testmoinal";
import style from "./hero.module.css";
import Sm_Cards from "./sm_card/Sm_Cards";
import Thumb_Cards from "./thumb_Card/Thumb_Cards";

const Hero = () => {
  return (
    <div className='hero_wrapper'>
      <div className='container'>
        <h2 className='text-[48px] font-semibold leading-[56px] pt-11 mb-[16px]'>
          For experienced Android developers
        </h2>
        <p className='w-[60%] text-[#575757]' style={{ fontSize: "18px" }}>
          Dive deeper into more advanced topics in Modern Android Development.
          These resources assume that you have existing knowledge of how to
          build Android apps.
        </p>
        <Sm_Cards />
        {/* <div className={style.hero_cards}>
          <Card
            title='Google I/O program details are now live!'
            para='Get a sneak peek of the Android content at Google I/O that helps you
          work smarter and simplify your development workflow.'
            img='https://developer.android.com/static/images/home/IO-light_720.png'
          />
          <Card
            title='Google for Games Developer Summit'
            para='Watch the keynote to learn how to accelerate your game development, optimize user acquisition, and supercharge user retention..'
            img='https://developer.android.com/static/images/cluster-illustrations/business-games-transformation.svg'
          />
        </div> */}
      </div>
      <div className='main mt-[50px] '>
        <div className='container'>
          <h2 className='text-[40px] font-semibold leading-10 pt-[50px]'>
            Developer Center
          </h2>
          <Thumb_Cards />
          {/* <div className={style.hero_cards}>
            <T_Card />
            <T_Card />
            <T_Card />
          </div> */}
          <h2 className='text-[40px] font-semibold leading-10 pt-11 mt-[30px]'>
            Kotlin language training
          </h2>
          <Testmoinal />
        </div>
      </div>
    </div>
  );
};

export default Hero;
