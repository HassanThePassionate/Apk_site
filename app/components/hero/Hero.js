import React from "react";
import Card from "./Card";
import T_Card from "../t_cards/T_Card";
import Testmoinal from "../testmoinal/Testmoinal";

const Hero = () => {
  return (
    <div className='hero_wrapper'>
      <div className='container'>
        <div className='hero_cards'>
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
        </div>
      </div>
      <div className='main mt-[50px] '>
        <div className='container'>
          <h2 className='text-4xl font-bold pt-[50px]'>Developer Center</h2>
          <div className='hero_cards'>
            <T_Card />
            <T_Card />
            <T_Card />
          </div>
          <Testmoinal />
        </div>
      </div>
    </div>
  );
};

export default Hero;
