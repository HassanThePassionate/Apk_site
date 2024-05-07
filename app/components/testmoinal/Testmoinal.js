import Link from "next/link";
import React from "react";
import Faq from "../faq/Faq";

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
        <div className='faqss mt-[40px]'>
          <h2 className='text-2xl font-bold pb-[20px]'>
            Frequently asked questions
          </h2>
          <div className='faqs flex flex-col gap-9 pt-[20px]'>
            <Faq
              title='How are these icons different from other packs?'
              id='1'
            />
            <Faq
              title='What are the benefits of using native Figma icons?'
              id='2'
            />
            <Faq title='Where can I use Anron Icons?' id='3' />
            <Faq title='Is it a one-time payment?' id='4' />
            <Faq title='Can I get a refund?' id='5' />
            <Faq title="What's included in the free version?" id='6' />
            <Faq title='How will I receive free updates?' id='7' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmoinal;
