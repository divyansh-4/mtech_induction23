import React from 'react'
import welcomeimg from '../components/Assets/Welcome.png'

const Welcome = () => {
  return (
    <div className='welcome'>
        <img src = {welcomeimg} className={"welc"}  alt="welcome" />
    </div>
  )
}

export default Welcome