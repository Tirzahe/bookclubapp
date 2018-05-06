import React from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";

const Nav = () => {
    return (
        
            <Popup
                trigger={<div className="menu">Menu</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={0}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
            >
                <div className="burger-menu open">
                    <Link to="/all-events" className="menu-item">All Events</Link>
                    <Link to="/upcoming-events" className="menu-item">Upcoming Events</Link>
                    <Link to="/create-new" className="menu-item">Create New Event</Link>
                    <Link to="/" className="menu-item">Log out</Link>
                </div>
            </Popup>
        
    );
}

export default Nav;