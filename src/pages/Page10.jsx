import React from 'react';

const Page10 = () => {
  return (
    <div className='h-screen p-5 bg-white relative'>
      <div className='h-full w-full bg-black overflow-hidden rounded-[50px]'>
        <img src='https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1244,h_903,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg'></img>
        <div className='absolute top-10 left-20 z-10'>
            <h1 className='uppercase text-white font-[anzo] text-[15vw]'>GOT<span className='text-[#9B9B9B]'> AN</span></h1>
            <h1 className='uppercase text-white font-[anzo] text-[15vw] leading-10'>Idea</h1>
        </div>
        <div className='flex gap-5 absolute bottom-1/3 left-2/4 z-10'>
          <img src='https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png'></img>
          <div className='h-35 border-2 '></div>
          <div className=''>
            <h1 className='text-3xl font-[anzo] text-[#9B9B9B] uppercase'>Reach me</h1>
            <h1 className='text-3xl font-[anzo] text-white'>I CAN COME TO WHEREVER YOU ARE.</h1>
            <h2 className='text-white font-[anzo1]'>+91 9699176764</h2>
          </div>
        </div>
        <div className='w-[85vw] flex items-center justify-between absolute bottom-16 left-20 z-10'>
            <div className='text-xl'> 
                <h1 className='text-[#9B9B9B]'>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h1>
                <h1 className='text-white'><span className='text-[#9B9B9B]'>BUT</span> OFFERING THE TRANSFORMATION!</h1>
            </div>
            <div>
                <h1 className='text-white text-xl'>© 2024 WebStudio™</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page10;
