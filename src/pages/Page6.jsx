import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page6 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".rotateText1", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText1",
        start: "top 60%",
        end: "start -280%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="bg-white text-center p-10 text-black">
      <div className="rotateText1 mt-34">
        <h1 className="text-[30vw] text-black font-[dusra-anzo] uppercase leading-[28vw]">
          Helping
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="text-[30vw] text-[#9B9B9B] font-[dusra-anzo] uppercase leading-[28vw]">
          My
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="text-[30vw] text-black font-[dusra-anzo] uppercase leading-[28vw]">
          Clients
        </h1>
      </div>
      <div className="rotateText1 truncate">
        <h1 className="text-[30vw] text-black font-[dusra-anzo] uppercase leading-[28vw]">
          To Achieve
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="text-[30vw] text-[#9B9B9B] font-[dusra-anzo] uppercase leading-[28vw]">
          Their
        </h1>
      </div>
      <div className="rotateText1">
        <h1 className="text-[30vw] text-black font-[dusra-anzo] uppercase leading-[28vw]">
          Dreams!
        </h1>
      </div>
    </div>
  );
};

export default Page6;
