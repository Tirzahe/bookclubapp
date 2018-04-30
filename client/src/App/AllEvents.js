import React from 'react'

const AllEvents = () => {
    return(
        <div className="AllEvents">
            <h1>2018 Events</h1>
            <button className="eventTile">image here  - Date of event</button>
            {/* all event tiles here */}
            <button className="newEventButton">Create New Event</button>
            <button className="editEvent">Edit Event</button>
            <a href="./UpcomingEvents" className="upcomingEvents">Upcoming Events</a>
            <a href="./DeleteEvents" className="deleteEvents">Delete Event</a>
        </div>
    )
}

export default AllEvents;
