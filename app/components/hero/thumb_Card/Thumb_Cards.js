import React from "react";
import Thumb_Card from "./thumb_card/Thumb_Card";
import style from "../sm_card/sm_cards.module.css";
const Thumb_Cards = () => {
  return (
    <div className={style.sm_cards}>
      <Thumb_Card
        title='Grow your audience'
        para=' Accelerate your user growth with our reporting and optimization tools, including unique market insights exclusive to Google Play'
        img='https://developer.android.com/static/images/picto-icons/monetize.svg'
      />
      <Thumb_Card
        title='Monetize with ease'
        para=' Create a revenue stream by launching a paid app or offering digital content or subscriptions'
        img='https://developer.android.com/static/images/picto-icons/grow.svg'
      />
      <Thumb_Card
        title='Engage and retain your users'
        para=' Our engagement tools and insights keep users coming back for more. Explore these app retention strategies to help engage your users.'
        img='https://developer.android.com/static/images/spot-icons/engagement-2.svg'
      />
    </div>
  );
};

export default Thumb_Cards;
