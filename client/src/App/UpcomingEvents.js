import React from 'react'

const UpcomingEvents = () => {
    return(
    <div className="upcomingEvents">
            <nav>
                <a href="./UpcomingEvents.js">UpcomingEvents</a>
                <a href="./AllEvents.js">2018 Events</a>
                <a href="./EditEventForm.js">Edit Event</a>
                <a href="./Form.js">Create New Event</a>
                <a href="./DeleteEvent.js">Delete/Edit Event</a>
                <a href="./Landing.js">Landing Page</a>
            </nav>
            <h1>Upcoming Events</h1>
            <button className="eventTile">image here  - Date of event</button>
            <button className="eventTile">image here  - Date of event</button>
            <button className="eventTile">image here  - Date of event</button>
            <button className="newEventButton">Create New Event</button>
            <button className="editEvent">Edit Event</button>
            <div className="footer">
                <a href="./DeleteEvents" className="deleteEvents">Delete/Edit Event</a>
                <a href="./AllEvents" className="allEvents">2018Events</a>
            </div>
        </div>
    )
}
export default UpcomingEvents;