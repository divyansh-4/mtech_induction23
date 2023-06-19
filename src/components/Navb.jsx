import React from 'react';
import iiit from "../parallaxElems/iiitdl.png";
import ind from "../parallaxElems/Vector.png";
import fb from "../parallaxElems/facebook.png";
import menu from "../parallaxElems/menu.png";
import "./Navb.css"
import inductionlogo from '../components/Assets/InductionLogo.png';
import iiitdlogo from '../components/Assets/iiitd white logo 2.png';
import facebooklogo from '../components/Assets/facebook.png'
import twitterline from  '../components/Assets/twitter-line.png'
import instagramline from '../components/Assets/instagram-line.png'
const Navb = () => {
  return (
    <div className='navbar'>
      <img  className="itl" src={iiit} alt="iiit" />
      <img src={ind} alt="ind" />
      <a href="https://www.instagram.com/sc.iiitd/?hl=en"><img src={instagramline} alt="fb" /></a>
      <a href="https://www.facebook.com/IIITDelhi/"><img src={fb} alt="fb" /></a>
      <a href="https://twitter.com/IIITDelhi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={twitterline} alt="fb" /></a>
      <img src={menu} className='right' alt="logo" />

    </div>
  );
};

export default Navb;
