import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page8 = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".image", {
      transform: "translateY(200px)",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skillsAnimation",
        start: "top 60%",
        end: "start -280%",
        scrub: 1,
      },
    });

    gsap.from(".soft", {
      transform: "translateY(-400px)",
      stagger: 1,
      scrollTrigger: {
        trigger: ".skillsAnimation",
        start: "top 60%",
        end: "start -280%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className='h-screen w-full skillsAnimation relative overflow-hidden'>
        <img className='w-full h-full absolute top-0 left-0 image' src='https://plus.unsplash.com/premium_photo-1717687637496-a02ddf754031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <img className='h-full w-full absolute top-0 left-0 z-2' src='https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1078,h_928,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png'></img>
        <h1 className='text-[100px] soft font-bold text-black absolute bottom-0 left-20 z-3 font-[anzo]'>SOFT</h1>
    </div>
  );
}

export default Page8;
