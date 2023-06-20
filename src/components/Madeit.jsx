import React from 'react';
import './Madeit.css';
import madeitimg from '../components/Assets/Madeit.svg';

const Madeit = () => {

  return (
      <div className="madeit">
          <img src={madeitimg} className={"made"} alt="madeit" />
      </div>
  );
}

export default Madeit;