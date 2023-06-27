import React, { useState, useEffect } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Navb from './Navb';
import Menu from './Menu';
import day1 from "../components/Assets/day1.svg"
import mainpage from "../components/Assets/mainpage.svg"
import Carousel from "react-elastic-carousel"
import './Schedule.css'

const API = "https://sheet.best/api/sheets/359e1172-7650-49b5-a418-8caaaf5f5ef3";

const Schedule = () => {
  const [showMenu, setShowMenu] = useState(false);


  const scrollToSpeaker = () => {
    // Define the logic to scroll to the speaker
  };

  const scrollToGallery = () => {
    // Define the logic to scroll to the gallery
  };

  return (
    <>

      <div className='bg-[#FFD0D0]'>
      {!showMenu && (
        <div className={'z-50 sticky top-0 absolute w-screen'}>
          <Navb menuControl={setShowMenu} menuState={showMenu} bg={''} />
        </div>
      )}
      {showMenu && (
        <div className={'z-50 sticky top-0'}>
          <div className={'absolute w-screen'}>
            <Navb menuControl={setShowMenu} menuState={showMenu} bg={''} />
          </div>
          <Menu
            scrollToSpeaker={scrollToSpeaker}
            closeMenu={setShowMenu}
            scrollToGallery={scrollToGallery}
          />
        </div>
      )}
        <div className="backgroundimg">
            <img src={mainpage} className={"mainpage"} alt="mainpage" />
        </div>
        <div className="carousel-container">
  <Carousel itemsToShow={1} enableSwipe={true}>
  <Table1 />
  <Table2 />
  <Table3 />
</Carousel>
</div>
      </div>
    </>
  );
};

export default Schedule;
