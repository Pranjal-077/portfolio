import React from 'react';

const Page9 = () => {
  return (
    <div className='h-screen p-5 bg-white relative'>
      <div className='h-full w-full bg-black overflow-hidden rounded-[50px]'>
        <video autoPlay loop muted className='h-full w-full object-cover' src='https://video.wixstatic.com/video/11062b_cb0c4d13153f4008920bb26beda8de0f/480p/mp4/file.mp4'></video>
        <div className='h-[450px] w-[450px] overflow-hidden rounded-full bg-white absolute z-10 top-1/2 left-[400px] transform -translate-x-1/2 -translate-y-1/2'>
            <video autoPlay loop muted className='absolute z-10' src='https://video.wixstatic.com/video/11062b_1a4b9f19c7d04747b5bf18c406ce3f55/480p/mp4/file.mp4'></video>
        </div>
        <div className='flex flex-col justify-center items-center h-full w-full absolute top-0 left-0 gap-14 absolute z-20'>
            <div className='text-white text-center leading-[0.8]'>
                <h1 className='text-[150px] font-[dusra-anzo] uppercase'>Personal</h1>
                <h2 className='text-xl font-[anzo4] text-[#9B9B9B]'>Intuition, Imagination, Discipline</h2>
            </div>
            <div className='text-white text-center leading-[0.8]'>
                <h1 className='text-[150px] font-[dusra-anzo] uppercase'>PROFESSIONAL</h1>
                <h2 className='text-xl font-[anzo4] text-[#9B9B9B]'>Time Management, Multitasking, Creativity</h2>
            </div>
            <div className='text-white text-center leading-[0.8]'>
                <h1 className='text-[150px] font-[dusra-anzo] uppercase'>ADDITIONAL</h1>
                <h2 className='text-xl font-[anzo4] text-[#9B9B9B]'>3D, Animation, AI Tools</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page9;
