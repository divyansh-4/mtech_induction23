import React, { useEffect } from 'react';
import './Landing.css';
import Navb from './Navb';
import bg2023 from '../parallaxElems/bg.png'
import image1 from "../parallaxElems/1.png";
import image2 from "../parallaxElems/2.png";
import image3 from "../parallaxElems/3.png";
import image4 from "../parallaxElems/4.png";
import image5 from "../parallaxElems/5.png";
import image6 from "../parallaxElems/6.png";
import image7 from "../parallaxElems/7.png";
import image8 from "../parallaxElems/8.png";
import image9 from "../parallaxElems/9.png";

const Landing = () => {
  useEffect(() => {
    const handleParallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const moving_value = move.getAttribute("data-value");
        const x = (e.clientX * moving_value) / 250;
        const y = (e.clientY * moving_value) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleParallax);

    return () => {
      document.removeEventListener("mousemove", handleParallax);
    };
  }, []);

  return (
    <>
    <img src={bg2023} alt="2023-background" className='center-panning' />
    <div className='flex justify-center items-center' >
       {/* <p className="absolute text-[#fff] text-[80px] font-[500] text-center pt-[1360px]" data-value="3" >
            30<sup>th</sup> June - 2<sup>nd</sup> July 2023
       </p> */}
    </div>
    <div className="container">
          <img src={image1} className="object" data-value="-2" alt="" />
          <img src={image2} className="object" data-value="6" alt="" />
          <img src={image3} className="object" data-value="4" alt="" />
          <img src={image4} className="object" data-value="-6" alt="" />
          <img src={image5} className="object" data-value="8" alt="" />
          <img src={image6} className="object" data-value="-4" alt="" />
          <img src={image7} className="object" data-value="5" alt="" />
          <img src={image8} className="object" data-value="-9" alt="" />
          <img src={image9} className="indlogo" data-value="-5" alt="" />
    </div>
    </>
  );
};

export default Landing;
