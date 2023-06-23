import React, { useState } from 'react';
import iiit from '../components/Assets/iiitdl.svg';
import azad from '../components/Assets/Azad_logo (1).png';
import g20 from '../components/Assets/G20_logo (1).png';
import nss from '../components/Assets/NSS_logo (1).png';
import ind from '../components/Assets/ind.svg';
import fb from '../components/Assets/lucide_linkedin.svg';
import './Navb.css';
import twitterline from '../components/Assets/twitter-line.png';
import instagramline from '../components/Assets/instagram-line.svg';
import Menu from './Menu';
import Landing from './Landing';

const Navb = ({menuControl, menuState}) => {
    const [showMenu, setShowMenu] = useState(menuState);

  return (
    <>
      <div className='flex sm:pt-5 pt-2 bg-[#5C2293] pb-[10px]'>
          <div className={'flex sm:pl-5 pl-3 w-full'}>
              <div className={'w-1/2 flex justify-start'}>
                  <img className={'sm:mr-2 mr-1 sm:w-[50px] sm:h-[30px] w-[30px] h-[20px]'}  src={azad} alt="azad" />
                  <img className={'sm:mx-2 mx-1 sm:w-[60px] sm:h-[30px] w-[30px] h-[20px]'}  src={g20} alt="g20" />
                  <img className={'sm:mx-2 mx-1 sm:w-[30px] sm:h-[30px] w-[30px] h-[20px]'}  src={nss} alt="nss" />
                  <a href="https://www.iiitd.ac.in/"><img className={'sm:mx-2 mx-1 sm:w-[80px] sm:h-[30px] w-[30px] h-[20px]'}  src={iiit} alt="iiit" /></a>
                  <a href="induction.iiitd.edu.in"><img className={'sm:mx-2 mx-1 sm:w-[100px] w-[30px] sm:h-[30px] h-[20px]'}  src={ind} alt="ind" /></a>
              </div>
              <div className={'w-1/2 flex justify-end'}>
                  <a href="https://www.instagram.com/sc.iiitd/?hl=en" target="_blank">
                      <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]'}  src={instagramline} alt="fb" />
                  </a>
                  <a href="https://in.linkedin.com/school/iiit-delhi/" target="_blank">
                      <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]'}  src={fb} alt="fb" />
                  </a>
                  <a href="https://twitter.com/IIITDelhi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                      <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[20px] sm:h-[30px] h-[20px]'} src={twitterline} alt="fb" />
                  </a>
                  {!showMenu ?
                      <div className={'flex justify-end sm:pr-[50px] pr-[10px] pl-[20px]'} >
                          <img onClick={()=>{menuControl(true); setShowMenu(true)}} className={'sm:h-[30px] h-[20px] sm:w-[40px] w-[25px]'} src={require("../parallaxElems/menu.png")} alt="menu" />
                      </div>
                      :
                      <div className={'flex justify-end sm:pr-[50px] pr-[10px] pl-[20px]'} >
                          <img onClick={()=>{menuControl(false); setShowMenu(false)}} className={'sm:h-[30px] h-[20px] sm:w-[30px] w-[20px]'} src={require("../components/Assets/close.png")} alt="close" />
                      </div>
                  }
              </div>
          </div>
      </div>
    </>
  );
};

export default Navb;
