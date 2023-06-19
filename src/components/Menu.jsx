import React from 'react';
import './Menu.css';
import inductionlogo from '../components/Assets/InductionLogo.png';
import iiitdlogo from '../components/Assets/iiitd white logo 2.png';
import facebooklogo from '../components/Assets/facebook.png'
import twitterline from  '../components/Assets/twitter-line.png'
import instagramline from '../components/Assets/instagram-line.png'
// import '../fontface.css';


const Menu = () => {
    return (
        <div className="menu">
            < div className="menu-item1">
                <div className="menu-item1-">
                    <img  className={"logo"} src={iiitdlogo} alt="" />
                    <img  className={"logo"} src={inductionlogo} alt="" />
                    <img  className={"logo"} src={instagramline} alt="" />
                    <img className={"logo"} src={facebooklogo} alt="" />
                    <img  className={"logo"} src={twitterline} alt="" />
                </div>
                <div className="menu-item1-1"> <h1 className={"Home"}> HOME</h1> </div>
                <div className="menu-item1-2"> <h1 className={"Home"}> ABOUT US</h1></div>
                <div className="menu-item1-3"> <h1 className={"Home"}> LOCATION</h1> </div>
                <div className="menu-item1-4">
                    <div className="menu-item1-4-1"> <h3 className={"FAQ"}> FAQ's</h3> </div>
                    <div className="menu-item1-4-2"> <h3 className={"Speakers"}> SPEAKERS</h3> </div>
                </div>
            </div>
            < div className="menu-item2">
                <div className="menu-item2-1"> <h1 className={"Schedule"}> SCHEDULE</h1> </div>
                <div className="menu-item2-2"> <h1 className={"Contact"}> CONTACT </h1> </div>
                <div className="menu-item2-3"> <h1 className={"Virtual"}> VIRTUAL TOUR</h1> </div>
                <div className="menu-item2-4"> <h1 className={"Gallery"}> GALLERY </h1> </div>
            </div>

        </div>
    );
};
export default Menu;