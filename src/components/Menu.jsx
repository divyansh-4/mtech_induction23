import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Menu.css';
import {Link} from "react-router-dom";

import inductionlogo from '../components/Assets/InductionLogo.png';
import iiitdlogo from '../components/Assets/iiitd white logo 2.png';
import facebooklogo from '../components/Assets/facebook.png'
import twitterline from  '../components/Assets/twitter-line.png'
import instagramline from '../components/Assets/instagram-line.png'
import Welcome from './Welcome';
import Navb from './Navb';
// import '../fontface.css';


const Menu = ({scrollToSpeaker, closeMenu, scrollToGallery}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, inView] = useInView({
      triggerOnce: true,
      rootMargin: '-100px 0px', // Adjust the root margin as needed
    });
    const imageRef = useRef(null);
  
    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);
  
    const [menut, setToggle] = useState(true);
    function viewMenu(){
      setToggle(!(menut))
    }

    return (
        <div className="flex min-w-screen h-screen  ">
            <div className=" text-start w-1/2 bg-[#2D51FD] sm:pt-[50px] pt-[100px] text-[#DCFF02]">
                <div className="slide-right sm:pl-[80px] pl-[20px] sm:text-[100px] text-[50px] font-[900]">
                    <a href="https://induction.iiitd.edu.in/"><p className={""} onClick={viewMenu}> HOME</p></a>
                </div>
                <div className="slide-right sm:pl-[80px] pl-[20px] sm:text-[100px] text-[50px] font-[900]">
                    <a href="https://www.iiitd.ac.in/" target='_blank'><p className={""}> ABOUT US</p></a>
                </div>
                <div className="slide-right sm:pl-[80px] pl-[20px] sm:text-[100px] text-[50px] font-[900]">
                    <a href="https://www.google.com/maps/place/Indraprastha+Institute+of+Information+Technology+Delhi/@28.5458541,77.2731762,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3e564daac1d:0x2c582e340e7bc556!8m2!3d28.5458541!4d77.2731762!16s%2Fg%2F11bc5q5mqf?entry=ttu" target='_blank'><p className={""}> LOCATION</p></a>
                </div>
                <div className="slide-right sm:pl-[80px] pl-[20px] sm:text-[100px] text-[50px] font-[900]">
                    <a href="https://www.iiitd.ac.in/life/hostels/hostel-policies" target='_blank'><p className={""}> HOSTEL POLICIES</p></a>
                </div>
                <div className="slide-right sm:pl-[80px] pl-[20px] flex sm:text-[50px] text-[20px] font-[900]">
                    <div className="pr-4 ">
                    <a href="https://docs.google.com/spreadsheets/d/1gUOvmtc-VCcri8zQN6XaYa7xqAd5jV0g5GGsBQA4DvY/edit?usp=sharing" target='_blank'><p className={""}> FAQs</p></a>
                    </div>
                    <div className="font-black pl-4 cursor-pointer" onClick={()=> {closeMenu(false); scrollToSpeaker()}}>
                        <p className={""}> SPEAKERS</p>
                    </div>
                </div>
            </div>
            <div className=" w-1/2 text-start">
                <div className="font-black fade-in-slow flex items-center h-1/4 text-[#5e1a78] bg-[#FFD0D0]">
                <Link to={'/schedule'}><p className={"sm:pl-[80px] pl-[20px] text-[#2D51FD] sm:text-[100px] text-[50px] font-[500] font-black" }> SCHEDULE</p></Link>
                </div>
                <div className="font-black fade-in-slow  flex items-center h-1/4 bg-[#D6DCFF] text-[#5e1a78]">
                <a href="https://iiitd.ac.in/life/discipline-grievance/anti-sexual-harassment-committee" target='_blank'><p className={"sm:pl-[80px] pl-[20px] text-[#BC95F2] sm:text-[100px] text-[50px] font-[900]"}> ICC</p></a>
                </div>
                <div className="font-black fade-in-slow flex items-center h-1/4 bg-[#FFFFFF]">
                    <a href="https://www.youtube.com/watch?v=YY65qJCTfO8" target='_blank'><p className={"sm:pl-[80px] pl-[20px] text-[#5C2293] sm:text-[100px] text-[50px] font-[900]"}> VIRTUAL TOUR</p></a>
                </div>
                <div className="font-black fade-in-slow flex items-center h-1/4 bg-[#B5B1FE] cursor-pointer" onClick={()=> {closeMenu(false); scrollToGallery()}}>
                    <p className={"sm:pl-[80px] pl-[20px] text-[#DCFF02] sm:text-[100px] text-[50px] font-[900]"}> GALLERY </p>
                </div>
            </div>

        </div>
    );
};
export default Menu;