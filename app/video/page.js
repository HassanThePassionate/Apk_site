import React from "react";
import Video_com from "../components/video_com/Video_com";
import Images from "../components/video_com/sidebyside/Images";
import Last from "../components/last/Last";
import Slider from "../components/slider/Slider";
const page = () => {
  return (
    <div>
      <Video_com />
      <Slider />
      <Images />
      <Last />
    </div>
  );
};

export default page;
