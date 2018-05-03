import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

import "../style.css";

const EventTile = ({ event }) => {
    
    return (
        <div>
            <Link to={`./event/${event._id}`} className="eventTile">
                <h5>{event.book.title}</h5>
                <h5>{moment(event.date).format('MMMM DD')}</h5>
            </Link>
        </div>
    )
};

export default EventTile;
