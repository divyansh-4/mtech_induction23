import iiitdlogo from '../parallaxElems/iiitdl.png';
import './footer.css';
const footer = () => {
  return (
    <div className="footer">
      <div className="iiitd-address">
        <a href="https://www.iiitd.ac.in"><img src={iiitdlogo} alt="iiitd" /></a>
          <span>Indian Institute of Information Technology, Delhi</span>Industrial Estate, Phase III,Near Govind Puri Metro Station
        <span>New Delhi, Delhi 110020</span>
      </div>
      <div className="links">
        <p>Website Developed <br/> By</p>
        <h2><a href="https://github.com/shubham-attri">Shubham</a> and <a href="https://github.com/divyansh-4">Divyansh</a></h2>
      </div>
    </div>
  )
}

export default footer;
