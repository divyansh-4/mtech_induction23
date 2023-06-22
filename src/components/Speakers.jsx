import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Speakers.css'
import speaker from '../components/Assets/Keynote Speakers.svg'
import speakers from '../components/Assets/Keynote Speakers.svg'
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
    <div id="features-section">
    <div className='speak'>
        
          <div ref={ref} className={`${isVisible ? "slide-right" : ''}`}>
      {/*<img*/}
      {/*  ref={imageRef}*/}
      {/*  src={speakers}*/}
      {/*  alt="Your Image"*/}
      {/*  className='pl-[100px]'*/}
      {/*/>*/}

      <img ref={ref} className={`${isVisible ? "slide-right" : ''}`}src = {speaker} alt="Speakers" />
      </div>
    </div>
    </div>
  )
}

export default Speaker