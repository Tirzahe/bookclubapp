import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EventTile from "./EventTile";

const UpcomingEvents = (props) => {
    const { loading, data, errMsg } = 
    props.events;
    if (loading){
        return <p>Loading...</p>
    }
    if (errMsg) {
        return <p>{errMsg}</p>
    }
    const eventTiles = props.events.data.map(event => {
        return(
            <EventTile key={event._id}
            event={event}/>
        )
    })
    return (
        <div className="upcomingEvents">
            <header>
                <h1>Upcoming Events</h1>
            </header>
            <main>
                {eventTiles}
                {/* {eventTiles} how do I show only the next three calendar events*/}
            </main>
            <div className="buttonSection">
                <Link className="newEventButton">Create New Event</Link>
                <Link className="editEvent">Edit Event</Link>
            </div>
            <div className="footer">
                <Link to="/delete-event" className="deleteLink">Delete/Edit Event</Link>
                <Link to="/all-events" className="allEventsLink">All Events</Link>
            </div>
        </div>
    )
}
const mapToStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapToStateToProps, {})( UpcomingEvents);