import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            < div className="menu-item1"> Icon Bar
                <div className="menu-item1-1"> Home </div>
                <div className="menu-item1-2"> About Us</div>
                <div className="menu-item1-3"> Location </div>
                <div className="menu-item1-4">
                    <div className="menu-item1-4-1"> FAQ's </div>
                    <div className="menu-item1-4-2"> Speakers </div>
                </div>
            </div>
            < div className="menu-item2">
                <div className="menu-item2-1"> <h1> SCHEDULE</h1> </div>
                <div className="menu-item2-2"> <h1> CONTACT </h1> </div>
                <div className="menu-item2-3"> <h1> VIRTUAL TOUR</h1> </div>
                <div className="menu-item2-4"> <h1> GALLERY </h1> </div>
            </div>

        </div>
    );
};
export default Menu;