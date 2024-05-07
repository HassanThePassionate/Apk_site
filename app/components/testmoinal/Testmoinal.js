import Link from "next/link";
import React from "react";

const Testmoinal = () => {
  return (
    <div className='wrap'>
      <div className='test'>
        <h3>Course</h3>
        <Link href='#'>
          <h2>Android Basics with Compose</h2>
        </Link>
        <p className=' w-[60%] mb-[16px]'>
          This is the <strong>recommended</strong> course to start learning
          Android! Build a series of apps using Jetpack Compose, the modern
          toolkit for creating beautiful user interfaces on Android. You will
          write these apps in the Kotlin programming language and learn best
          practices in Material Design, app architecture, data storage, fetching
          data from the network, testing, and more. No programming experience
          required.
        </p>
        <span className='flex items-center gap-[10px]'>
          <div className='box'></div>
          <span>
            <i>Training level:</i> <b>Beginner</b>
          </span>
        </span>
        <button className='hero_btn hover:bg-black hover:text-white'>
          Strat Course
        </button>
      </div>
    </div>
  );
};

export default Testmoinal;
