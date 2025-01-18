import React from 'react';

const Page5 = () => {
  return (
    <div className='h-screen p-5 bg-white relative'>
      <div className='h-full w-full bg-black overflow-hidden rounded-[50px]'>
        <video autoPlay loop muted className='h-full w-full object-cover' src='https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4'></video>
        <h1 className='font-[anzo1] text-[15vw] uppercase absolute bottom-0 text-white'>About</h1>
      </div>
    </div>
  );
}

export default Page5;
