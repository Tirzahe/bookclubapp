import React from 'react';
import EventTiles from './EventTiles.js';

export default (props) => <EventTiles
    pageTitle="All Events"
    linkText="Upcoming Events"
    {...props}
    component={EventTiles} />;
