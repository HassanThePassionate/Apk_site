import Image from "next/image";
import React from "react";
import { IoIosPlayCircle } from "react-icons/io";
const Images = () => {
  return (
    <div className='images_wrapper mt-[60px]'>
      <div className='frist flex p-[30px] min-h-[80vh] items-center justify-center'>
        <div className='container'>
          <div className='images'>
            <div className='left_iteam '>
              <div className='box_text text-[16px]'>
                Android Earthquake Alert System
              </div>
              <h2 className='text-[40px] leading-[48px] font-bold mb-[16px]'>
                Download 4k YouTube Video.
              </h2>
              <p className='text-[18px] mb-[32px]'>
                Our Browser extension allows you to download mp4 from YouTube in
                crystal-clear clarity, ranging from 4k right the way up to 8K!
                This jaw-dropping resolution is available, but you can also use
                our YouTube 4k downloader to obtain lower-res videos. Download
                Youtube 1080p, 720p, 480p and 144p, making storage easier and
                more efficient.
              </p>
              <button className='watch_btn'>
                Watch the video{" "}
                <span>
                  <IoIosPlayCircle size={24} color='#c6ff00' />
                </span>{" "}
              </button>
            </div>
            <div className='right_iteam'>
              <Image src='/download.webp' alt='img' height={482} width={482} />
            </div>
          </div>
        </div>
      </div>
      <div className='secod p-[30px] min-h-[80vh] flex  items-center justify-center bg-[#F1F3F4] mt-[40px] '>
        <div className='container'>
          <div className='images '>
            <div className='right_iteam'>
              <Image src='/3.webp' alt='img' height={482} width={482} />
            </div>
            <div className='left_iteam '>
              <div
                className='box_text text-[16px]'
                style={{ background: "#DADCE0" }}
              >
                Emergency Location Service
              </div>
              <h2 className='text-[40px] leading-[48px] font-bold mb-[16px]'>
                Download YouTube Shorts.
              </h2>
              <p className='text-[18px] mb-[32px]'>
                There is lots of great new content available on YouTube these
                days, and it comes in the form of YouTube shorts! Our browser
                extension also doubles as a Youtube Shorts downloader, meaning
                you can enjoy as much of it as you like, offline, at a time of
                your choosing.
              </p>
              <button className='watch_btn'>
                Watch the video{" "}
                <span>
                  <IoIosPlayCircle size={24} color='#c6ff00' />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='third flex p-[30px] mt-[40px] min-h-[80vh] items-center justify-center'>
        <div className='container'>
          <div className='images'>
            <div className='left_iteam '>
              <div className='box_text text-[16px]'>Unknown tracker alerts</div>
              <h2 className='text-[40px] leading-[48px] font-bold mb-[16px]'>
                Convert YouTube Video into MP3.
              </h2>
              <p className='text-[18px] mb-[32px]'>
                Enjoy listening to YouTube videos offline? Then our YouTube
                music downloader allows you to convert YouTube to Mp3 and do
                just that! Using our Mp3 YouTube converter is an easy process
                too, with our YouTube to mp3 downloader converting your videos
                into mp3 format in a matter of seconds, letting you get all the
                free offline music you could ever need.
              </p>
              <button className='watch_btn'>
                Watch the video{" "}
                <span>
                  <IoIosPlayCircle size={24} color='#c6ff00' />
                </span>{" "}
              </button>
            </div>
            <div className='right_iteam'>
              <Image src='/5.webp' alt='img' height={482} width={482} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
