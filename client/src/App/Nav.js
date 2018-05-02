import React from 'react';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Nav = () => {
    return (
        
            <Popup
                trigger={<div className="menu">Menu</div>}
                position="right top"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={3}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0px", border: "none" }}
                arrow={false}
            >
                <div className="burger-menu open">
                    <Link to="/all-events" className="menu-item">All Events</Link>
                    <Link to="/" className="menu-item">Upcoming Events</Link>
                    <Link to="/edit-form" className="menu-item">Edit Event</Link>
                    <Link to="/create-new" className="menu-item">Create New Event</Link>
                    <Link to="/delete-event" className="menu-item">Delete Event</Link>
                </div>
            </Popup>
        
    );
}

export default Nav;

{/* <nav>
    <a href="./UpcomingEvents.js">UpcomingEvents</a>
    <a href="./AllEvents.js">2018 Events</a>
    <a href="./EditEventForm.js">Edit Event</a>
    <a href="./Form.js">Create New Event</a>
    <a href="./DeleteEvent.js">Delete/Edit Event</a>
    <a href="./Landing.js">Landing Page</a>
</nav> */}