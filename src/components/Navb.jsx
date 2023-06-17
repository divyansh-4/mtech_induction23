import React from 'react';
import iiit from "../parallaxElems/iiitdl.png";
import ind from "../parallaxElems/Vector.png";
import fb from "../parallaxElems/facebook.png";
import menu from "../parallaxElems/menu.png";
import "./Navb.css"

const Navb = () => {
  return (
    <div className='navbar'>
      <img  className="itl" src={iiit} alt="iiit" />
      <img src={ind} alt="ind" />
      <img src={fb} alt="fb" />
      <img src={fb} alt="fb" />
      <img src={fb} alt="fb" />
      <img src={menu} className='right' alt="logo" />

    </div>
  );
};

export default Navb;
