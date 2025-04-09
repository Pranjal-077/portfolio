import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({ paused: true });

        tl.to("#full", {
            right: 0,
            duration: 0.8
        });

        tl.from("#full h4", {
            x: 150,
            duration: 0.7,
            stagger: 0.28,
            opacity: 0
        });

        tl.from("#full i", {
            opacity: 0
        });

        tl.pause();

        const handleMenuClick = () => {
            tl.play();
            setIsOpen(true);
        };

        const handleCrossClick = () => {
            tl.reverse();
            setIsOpen(false);
        };

        // Attach the click event handlers
        document.querySelector("#nav i").addEventListener("click", handleMenuClick);
        document.querySelector("#full i").addEventListener("click", handleCrossClick);

        // Cleanup on component unmount
        return () => {
            document.querySelector("#nav i").removeEventListener("click", handleMenuClick);
            document.querySelector("#full i").removeEventListener("click", handleCrossClick);
        };

    }, []); // Empty dependency array to ensure this effect runs only once after the component mounts

    return (
        <div className="text-white fixed w-full flex items-center justify-end z-10 py-20 px-10">
            <div id="nav" className='flex items-center'>
                <button className="bg-black border-4 text-[15px] px-10 py-3 hover:bg-gray-500 rounded-full">Hire me</button>
                <i className="ri-menu-line text-4xl ml-3"></i>
            </div>
            <div
                id="full"
                className="h-[100vh] w-full absolute bg-black/40 top-0 -right-full backdrop-blur-md p-[150px] px-[60px]"
                style={{ display: isOpen ? 'block' : 'none' }} // Conditionally display based on state
            >
                <div className="flex flex-col absolute right-10">
                    <a href='/'><h4 className="text-[50px] font-[anzo1] text-white-900 font-medium mb-[10px]">Work</h4></a>
                    <a href='/'><h4 className="text-[50px] font-[anzo1] text-white-900 font-medium mb-[10px]">About</h4></a>
                    <a href='/'><h4 className="text-[50px] font-[anzo1] text-white-900 font-medium mb-[10px]">Services</h4></a>
                    <a href='/'><h4 className="text-[50px] font-[anzo1] text-white-900 font-medium mb-[10px]">Contact us</h4></a>
                </div>
                <i className="ri-close-line absolute top-[5%] right-[2%] bg-white text-black rounded-full px-[5px] font-semibold text-[20px] cursor-pointer"></i>
            </div>
        </div>
    );
};

export default Header;
