import React, { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoving = (e) => {
      setxVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20);
      setyVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 7);
      tiltRef.current.style.transform = `rotateY(${xVal}deg) rotateX(${yVal}deg)`;
  };

  
  useGSAP(function() {
    gsap.to(tiltRef.current, {
      transform: `rotateY(${xVal}deg) rotateX(${yVal}deg)`,
      duration: 5,
      ease: "power4.out",
    })
  }, [xVal, yVal]);

  return (
    <div id="page1"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen reative p-4 bg-white"
    >
      <div id="page1-in" className="realtive shadow-xl py-12 px-20 shadow-gray-700 h-full w-full bg-cover rounded-[35px] bg-[url(./assets/portfolio.jpg)]">
        <img
          className="h-20"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
        ></img>
        <TiltText abc={tiltRef}/>
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
