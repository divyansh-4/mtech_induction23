import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Speakers.css'
import speaker from '../components/Assets/Kenote Speakers.png'
import speakers from '../components/Assets/speaker.png'
const Speaker = () => {
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

  return (
    <div id='speakers' className='speak'>
        <img src = {speaker} className={"welc"}  alt="welcome" />
  
        <div ref={ref} className={`${isVisible ? "slide-right" : ''}`}>
      <img
        ref={imageRef}
        src={speakers}
        alt="Your Image"
        className='pl-[100px]'
      />
    </div>
    </div>
  )
}

export default Speaker