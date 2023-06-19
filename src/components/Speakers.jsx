import React from 'react'
import './Speakers.css'
import speaker from '../components/Assets/Kenote Speakers.png'

const Speaker = () => {
  return (
    <div className='speak'>
        <img src = {speaker} className={"welc"}  alt="welcome" />
    </div>
  )
}

export default Speaker