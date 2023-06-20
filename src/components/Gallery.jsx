import React from 'react';
import './Gallery.css';
import img1 from '../components/Assets/home-bg-1.jpg'
import img2 from '../components/Assets/home-bg-2.jpg'
import img3 from '../components/Assets/home-bg-3.jpg'
const Gallery = () => {
    return (
        <div >
        <div className="gallery">
            <h1>Gallery</h1>
        </div>
        <div className={"tech-slideshow"}>
            <div className="mover-1">
                <img src={img1} alt="" />
                <img src={img1} alt="" />
            </div>
            <div className="mover-2">
                <img src={img2} alt="" />
                <img src={img2} alt="" />
            </div>
            <div className="mover-3">
                <img src={img3} alt="" />
                <img src={img3} alt="" />
            </div>

        </div>
        </div>
    );
}

export default Gallery;