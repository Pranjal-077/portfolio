import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Page1Bottom = () => {

  useGSAP(function() {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  });

  return (
    <div className='absolute w-[90%] bottom-0 flex items-center justify-between'>
      <div>
            <h1 className='text-[20px] font-regular text-white'>BRAND DESIGN | WEBSITE DESIGN</h1>
            <h1 className='text-[20px] font-regular text-black'>BESPOKE FREELANCE</h1>
      </div>
      <div id='banner'>
        <img className='h-[85px] mb-6' src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png'></img>
        <img className='h-[85px] mb-6' src='https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png'></img>
      </div>
    </div>
  );
}

export default Page1Bottom;
