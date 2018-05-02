import React from 'react';
import { Link } from 'react-router-dom';

const Event = (props) => {
    const { loading, data, errMsg } = props.events;
    if (loading) {
        return <p>Loading...</p>
    }
    if (errMsg) {
        return <p>{ errMsg }</p>
    }
    // const event = props.events.data.event._id => {
        return (
            <div>
                <header>
                    <h1 className="eventDate">DAY MTH 01 - Hr</h1>
                    <h5 className="hostName">Host: Host Name</h5>
                    <h5 className="eventAddress">eventAddress</h5>
                    <h1 className="bookTitle">Book Title</h1>
                    <h4 className="bookAuthor">Author: Airote Th'bük</h4>
                </header>
                <main>
                    <p className="blurb" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </main>
                <div className="footer">
                    <Link to="/all-events" className="allEventsLink">All Events</Link>
                    <Link to="/upcoming-events" className="upcomingLink">Upcoming Events</Link>
                </div>
            </div>
    )};


// const mapToStateToProps = (state) =>{
//     return{
//         events: state.events
//     }
// }

// export default connect(null, {})(Event);
export default Event;