import React, { useState } from 'react';
import './Menu.css';
import inductionlogo from '../components/Assets/InductionLogo.png';
import iiitdlogo from '../components/Assets/iiitd white logo 2.png';
import facebooklogo from '../components/Assets/facebook.png'
import twitterline from  '../components/Assets/twitter-line.png'
import instagramline from '../components/Assets/instagram-line.png'
import Welcome from './Welcome';
import Navb from './Navb';
// import '../fontface.css';


const Menu = () => {
    const [menut, setToggle] = useState(true);
    function viewMenu(){
      setToggle(!(menut))
    }

    return (
        <div className="flex w-screen h-screen mongoose-med ">
            <div className=" text-start w-1/2 bg-[#2D51FD] pt-[150px] text-[#DCFF02]">
                <div className="pl-[80px] text-[100px] font-[500]">
                    <p className={""} onClick={viewMenu}> HOME</p>
                </div>
                <div className="pl-[80px] text-[100px] font-[500]">
                    <p className={""}> ABOUT US</p>
                </div>
                <div className="pl-[80px] text-[100px] font-[500]">
                    <p className={""}> LOCATION</p>
                </div>
                <div className="pt-[30px] pl-[80px] flex text-[50px] font-[500]">
                    <div className="pr-4 ">
                        <p className={""}> FAQs</p>
                    </div>
                    <div className="pl-4">
                        <p className={""}> SPEAKERS</p>
                    </div>
                </div>
            </div>
            <div className=" w-1/2 text-start">
                <div className="fade-in-slow flex items-center h-1/4 text-[#5e1a78] bg-[#FFD0D0]">
                    <p className={"pl-[80px] text-[#2D51FD] text-[100px] font-[500]"}> SCHEDULE</p>
                </div>
                <div className="fade-in-slow  flex items-center h-1/4 bg-[#D6DCFF] text-[#5e1a78]">
                    <p className={"pl-[80px] text-[#BC95F2] text-[100px] font-[500]"}> CONTACT </p>
                </div>
                <div className="fade-in-slow flex items-center h-1/4 bg-[#FFFFFF]">
                    <p className={"pl-[80px] text-[#5C2293] text-[100px] font-[500]"}> VIRTUAL TOUR</p>
                </div>
                <div className="fade-in-slow flex items-center h-1/4 bg-[#B5B1FE]">
                    <p className={"pl-[80px] text-[#DCFF02] text-[100px] font-[500]"}> GALLERY </p>
                </div>
            </div>

        </div>
    );
};
export default Menu;