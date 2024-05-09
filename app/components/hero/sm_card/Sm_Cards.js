import React from "react";
import Sm_card from "./small_card/Sm_card";
import style from "./sm_cards.module.css";
const Sm_Cards = () => {
  return (
    <div>
      <div className={style.sm_cards}>
        <Sm_card
          title='YouTube Video Downloader'
          para='Our free Browser Extension allows you to download YouTube videos in different video qualities ranging from 360p to ultra high definition 4k. Supports all formats, including AVI, FLV, WebM, MP4 and MP3 without size and length limits.'
          img='https://i0.wp.com/addoncrop.com/wp-content/uploads/2021/03/Addoncrop-YouTube-video-downloader-icon.png'
          btn='Discover How'
          color='#FCEAE2'
        />
        <Sm_card
          img='https://i1.wp.com/addoncrop.com/wp-content/uploads/2021/03/icon-popup.png'
          title='Soundcloud Music Downloader'
          para='
          Download single tracks or entire playlists of Soundcloud to mp3 music with ID3 tags, ease & all for free! Ours best Soundcloud to mp3 converter browser extension supports a range of browsers, as well as letting you cut & trim your favourite audio content to your exact requirements.
          '
          btn='Discover How'
          color='#FFF7E0'
        />
      </div>
    </div>
  );
};

export default Sm_Cards;
