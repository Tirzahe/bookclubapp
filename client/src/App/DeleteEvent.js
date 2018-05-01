import React from 'react'

const DeleteEvent = () => {
    return(
        <div className="deleteEvent">
        <nav>
                <a href="./UpcomingEvents.js">UpcomingEvents</a>
                <a href="./AllEvents.js">2018 Events</a>
                <a href="./EditEventForm.js">Edit Event</a>
                <a href="./Form.js">Create New Event</a>
                <a href="./Landing.js">Landing Page</a>
            </nav>
            <h1>Delete/Edit Event</h1>
            <p>Select an event to edit or delete</p>
            <button className="eventTile">image here  - Date of event</button>
            {/* all event tiles here */}
            <button className="deleteEventButton">Delete Event</button>
            <button className="editEventButton">Edit Event</button>
            <div className="footer">
                <a href="./Form" className="newEventLink">Create New Event</a>
                <a href="./UpcomingEvents" className="upcomingEventsLink">Upcoming Events</a>
            </div>
        </div>
    )
}

export default DeleteEvent;