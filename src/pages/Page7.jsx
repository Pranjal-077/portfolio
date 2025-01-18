import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from 'react';

const Page7 = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.banner1 img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
    gsap.to('.banner2 img', {
      rotateY: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
    gsap.to('.banner3 img', {
      scaleY: 0.8,
      duration: 3,
      repeat: -1,
      ease: 'elastic.out'
    })

    gsap.from("#triangle", {
      transformOrigin: "center center",
      rotateZ: 60,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
      trigger: ".triangle",
      start: "top 60%",
      end: "middle middle",
      scrub: 1,
      },
    });
  }, []);

  return (
    <div className='h-[1050px] p-10 bg-white'>
      <div className='h-full w-full triangle bg-black rounded-[50px] relative'>
        <img id='triangle' className='absolute translate-x-1/2' src='https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_692,h_595,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/triangle%203.png'></img>
        <div className=''>
            <h1 className='absolute left-10 text-[#9B9B9B] font-[anzo] text-[30vh]'>How</h1>
            <h1 className='absolute top-[25vh] left-10 text-white font-[anzo] text-[30vh]'>Can</h1>
            <h1 className='absolute right-10 text-white font-[anzo] text-[30vh]'>I Help</h1>
            <h1 className='absolute top-[25vh] right-10 text-white font-[anzo] text-[30vh]'>you</h1>
        </div>
        <div>
            <div className='flex justify-center items-center absolute font-[anzo1] bottom-20 gap-10 m-20'>
                <div className='text-white w-1/3 text-xl'>
                  <h2> <span className='text-[#9B9B9B]'>I am a self-taught web and brand designer with a passion for creating unique and timeless</span> masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses. Bespoke Freelance for agencies.</h2>
                  <div className="flex banner1 items-baseline gap-2 mt-7">
                    <img src='https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png'></img>
                    <h1 className="uppercase text-4xl font-[anzo]">Design</h1>
                    <h5 className="font-[alag-anzo]">01</h5>
                  </div>
                </div>
                <div className='text-white w-1/3 text-xl'>
                  <h2> <span className='text-[#9B9B9B]'>With a background in strategic marketing and acknowledged expertise in web development,</span> I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</h2>
                  <div className="flex banner2 items-baseline gap-2 mt-7">
                    <img src='https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_46,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png'></img>
                    <h1 className="uppercase text-4xl font-[anzo]">Development</h1>
                    <h5 className="font-[alag-anzo]">02</h5>
                  </div>
                </div>
                <div className='text-white w-1/3 text-xl'>
                  <h2>My mission is to drive exceptional growth for my clients by increasing their brand appearance<span className='text-[#9B9B9B]'>, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</span></h2>
                  <div className="flex banner3 items-baseline gap-2 mt-7">
                  <img src='https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_46,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png'></img>
                    <h1 className="uppercase text-4xl font-[anzo]">Branding</h1>
                    <h5 className="font-[alag-anzo]">03</h5>
                  </div>
                </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 text-white text-xl">
            <h1 className="text-[#868686]">GOT A PROJECT?</h1>
            <h1><span className="text-[#868686]">THEN PLEASE</span> CONTACT ME.</h1>
          </div>
        </div>
      </div>
  );
}

export default Page7;
