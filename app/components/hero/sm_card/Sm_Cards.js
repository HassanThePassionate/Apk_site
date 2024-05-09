import React from "react";
import Sm_card from "./small_card/Sm_card";
import style from "./sm_cards.module.css";
const Sm_Cards = () => {
  return (
    <div>
      <div className={style.sm_cards}>
        <Sm_card
          title='Build a high-quality app or game'
          para=' Drive long term success by improving key app quality components including content, user experience and technical performance.'
          btn='Game services'
          img='https://developer.android.com/static/images/picto-icons/badge.svg'
        />
        <Sm_card
          img='https://developer.android.com/static/images/spot-icons/tools-update.svg'
          title='Release with confidence'
          para='
          Make your app launch a success with tools and strategies to help you publish, manage, and distribute your app worldwide
          '
          btn='Discover How'
        />
      </div>
    </div>
  );
};

export default Sm_Cards;
