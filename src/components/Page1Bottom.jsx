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
        <img className='h-[55px] w-[55px] object-cover rounded-full mb-6' src='https://static.vecteezy.com/system/resources/previews/021/496/664/non_2x/windows-symbol-brand-logo-white-design-microsoft-software-illustration-with-black-background-free-vector.jpg'></img>
        <img className='h-[55px] w-[55px] object-cover rounded-full mb-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzEkaAN0BJ2o3ri2IsQRKXVk6ejQQqz0GUg&s'></img>
      </div>
    </div>
  );
}

export default Page1Bottom;
