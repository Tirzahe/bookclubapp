import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EventTile from "./EventTile";

const Events = (props) => {
    const { loading, data, errMsg } = props.events;
    if (loading) {
        return <p>Loading...</p>
    }
    if (errMsg) {
        return <p>{errMsg}</p>
    }
    const eventTiles = props.events.data.sort((eventA, eventB) => {
        const milsA = new Date(eventA.date).getTime();
        const milsB = new Date(eventB.date).getTime();
        return milsA - milsB;
    }).filter(props.filterCallback).map(event => {
        return (
            <EventTile key={event._id} event={event} />
        )
    })
    return (
        <div className="AllEvents">
            <header>
                <h1>{props.pageTitle}</h1>
            </header>
            <main>
                {eventTiles}
            </main>
            <div className="buttonSection">
                <Link to="/create-new" className="newEventButton ">Create New Event</Link>
                <Link to="/edit-form" className="editEvent ">Edit Event</Link>
            </div>
            <div className="footer">
                <Link to="/upcoming-events" className="upcomingLink">Upcoming Events</Link>
                <Link to="/delete-event" className="deleteLink">Delete/Edit Event</Link>
            </div>
        </div>
    )
}
const mapToStateToProps = (state) => {
    return {
        events: state.events
    }
}

Events.defaultProps = {
    pageTitle: "Events",
    filterCallback: () => true
}

export default connect(mapToStateToProps, {})(Events);
