import React, { useState } from 'react';
import iiit from '../components/Assets/iiitdl.svg';
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
      <div className='flex sm:pt-5 pt-2'>
          <div className={'sm:pl-10 pl-3 flex w-1/2 justify-start'}>
            <img className={'mr-2 w-[80px] h-[30px]'}  src={iiit} alt="iiit" />
            <img className={'mx-2 sm:w-[100px] w-[70px] h-[30px]'}  src={ind} alt="ind" />
            <a href="https://www.instagram.com/sc.iiitd/?hl=en">
              <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[15px] sm:h-[30px] h-[15px]'}  src={instagramline} alt="fb" />
            </a>
            <a href="https://www.facebook.com/IIITDelhi/">
              <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[15px] sm:h-[30px] h-[15px]'}  src={fb} alt="fb" />
            </a>
            <a href="https://twitter.com/IIITDelhi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <img className={'sm:mx-2 mx-1 sm:w-[30px] w-[15px] sm:h-[30px] h-[15px]'} src={twitterline} alt="fb" />
            </a>
          </div>
          {!showMenu ?
                <div className={'flex justify-end w-1/2 sm:pr-[50px] pr-[20px]'} onClick={()=>{menuControl(true); setShowMenu(true)}}>
                    <img className={'h-[30px] w-[40px]'} src={require("../parallaxElems/menu.png")} alt="menu" />
                </div>
          :
                <div className={'flex justify-end w-1/2 sm:pr-[50px] pr-[20px]'} onClick={()=>{menuControl(false); setShowMenu(false)}}>
                    <img className={'h-[30px] w-[30px]'} src={require("../components/Assets/close.png")} alt="close" />
                </div>
          }
      </div>
    </>
  );
};

export default Navb;
