import React from 'react';

const Page3 = () => {
  return (
    <div className='relative flex justify-center items-center h-screen'>
    <img className='absolute scale-125 z-20' src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_778,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png'/>
        <video autoPlay loop muted className='h-[65vh] w-[50vw] relative object-cover z-10' src='https://videos.pexels.com/video-files/7308089/7308089-hd_1920_1080_24fps.mp4'></video>
        <div className='h-0.5 w-3/5 top-[45%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-4/5 top-[60%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-full top-[75%] absolute z-0 bg-black'></div>
    </div>
  );
}

export default Page3;
