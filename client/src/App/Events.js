import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EventTile from "./EventTile";
import Nav from "./Nav";

const Events = (props) => {
    const { loading, data, errMsg } = props.events;
    if (loading) {
        return <p>Loading...</p>
    }
    if (errMsg) {
        return <p>{errMsg}</p>
    }
    const eventTiles = data.sort((eventA, eventB) => {
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
            <Nav />
            <header>
                <h1>{props.pageTitle}</h1>
            </header>
            <main>
                {eventTiles}
            </main>
            <div className="footer">
                 <Link to="/create-new" className="newEventButton ">Create New</Link>
                
                <Link to={props.footerLink} className="upcomingEvent ">{props.linkText}</Link>
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
    pageTitle: "All Events",
    filterCallback: () => true,
    footerLink: "/upcoming-events",
    linkText: "Upcoming Events"
}

export default connect(mapToStateToProps, {})(Events);
