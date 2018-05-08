import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

import "../style.css";

const EventTile = ({ event }) => {
    
    return (
        <div>
            <Link to={`./event/${event._id}`} className="eventTile">
                <h3>{event.book.title}</h3>
                <h3>{moment.utc(event.date).format('MMMM DD')}</h3>
            </Link>
        </div>
    )
};

export default EventTile;
