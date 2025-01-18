import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
return (
    <div className='text-white fixed w-full flex items-center justify-end z-10 py-20 px-10 '>
            <button className='bg-black border-4 text-[15px] px-10 py-3 hover:bg-gray-500 rounded-full'>Hire me</button>
            <i className="ri-menu-line text-4xl ml-3"></i>
    </div>
);
}

export default Header;
