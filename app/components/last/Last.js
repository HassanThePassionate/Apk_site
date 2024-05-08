import React from "react";
import Last_card from "./last_card/Last_card";

const Last = () => {
  return (
    <div className='last_wrapper my-[50px]'>
      <div className='container'>
        <h2 className='text-[60px] font-bold leading-[68px]'>
          Explore ways to control <br /> your privacy.
        </h2>
        <ul className='cards_lists'>
          <Last_card />
          <Last_card />
          <Last_card />
          <Last_card />
        </ul>
      </div>
    </div>
  );
};

export default Last;
