import React from 'react'
import './Speakers.css'
import speaker from '../components/Assets/Kenote Speakers.png'
import speakers from '../components/Assets/speaker.png'
const Speaker = () => {
  return (
    <div className='speak'>
        <img src = {speaker} className={"welc"}  alt="welcome" />
        {/* <div class='container'> */}
  
          <div class="slide-right pl-[140px]">
           <img src={speakers} alt="" />
  {/* </div> */}

  
</div>
    </div>
  )
}

export default Speaker