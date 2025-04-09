import React from 'react';

const Page4 = () => {
  return (
    <div className='h-screen p-10 bg-white'>
      <div className='h-full w-full bg-black rounded-[50px] relative overflow-hidden'>
        <div className='h-[60vh] absolute top-32 left-10'>
          <h1 className='uppercase text-[30vh] font-[anzo] text-[#9B9B9B] leading-10'>What</h1>
          <h1 className='uppercase text-white text-[30vh] font-[anzo]'>I do</h1>
        </div>
        <div className='overflow-hidden absolute top-10 -right-24 h-[75vh]'>
          <video className='h-full w-full object-fill' autoPlay loop muted src='https://videos.pexels.com/video-files/856051/856051-hd_1920_1080_30fps.mp4'></video>
        </div>
        <div className='absolute bottom-10 left-10'>
          <h3 className='uppercase text-white'>I Design and Develop</h3>
          <h3 className='uppercase text-[#9B9B9B]'>Modern, Impact and Luxuries</h3>
          <h3 className='text-white'>website that seamlessly bridge your goals with needs of your clients.</h3>
        </div>
      </div>
    </div>
  );
}

export default Page4;
