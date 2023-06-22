// import iiitdlogo from '../parallaxElems/iiitdl.png';
// import './footer.css';
// const footer = () => {
//   return (
//     <div className="footer">
//       <div className="iiitd-address">
//         <a href="https://www.iiitd.ac.in"><img src={iiitdlogo} alt="iiitd" /></a>
//           <span>Indraprastha Institute of Information Technology, Delhi</span>Industrial Estate, Phase III,Near Govind Puri Metro Station
//         <span>New Delhi, Delhi 110020</span>
//       </div>
//       <div className="links">
//         <p>Website Developed <br/> By</p>
//         <h2><a href="https://github.com/shubham-attri">Shubham</a> and <a href="https://github.com/divyansh-4">Divyansh</a></h2>
//       </div>
//     </div>
//   )
// }
//
// export default footer;


import React from 'react'
import welcomeimg from '../components/Assets/footer.svg'

const footer = () => {
  return (
    <div className='welcome'>
        <img src = {welcomeimg} className={"welc"}  alt="Footer" />
    </div>
  )
}

export default footer