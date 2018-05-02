import React from 'react';
import { Link } from 'react-router-dom';


const DeleteEvent = () => {
    return (
        <div className="deleteEvent">
            <h1>Delete/Edit Event</h1>
            <p>Select an event to edit or delete</p>
            <button className="eventTile">image here  - Date of event</button>
            {/* all event tiles here */}
            <button className="deleteEventButton">Delete Event</button>
            <button className="editEventButton">Edit Event</button>
            <div className="footer">
                <Link to="/create-new" className="newEventLink">Create New Event</Link>
                <Link to="/upcoming-events" className="upcomingLink">Upcoming Events</Link>
            </div>
        </div>
    )
}

export default DeleteEvent;