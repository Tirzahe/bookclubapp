import React from 'react';
import EventTiles from './EventTiles.js';

export default (props) => <EventTiles
    pageTitle="All Events"

//TODO stop caring about redux and take your events as a
// direct prop
    linkText="Upcoming Events"
    {...props}
    component={EventTiles} />;
