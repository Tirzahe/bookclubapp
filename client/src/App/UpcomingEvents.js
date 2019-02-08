import React from 'react';
import EventTiles from './EventTiles.js';

export default (props) => <EventTiles 
    pageTitle="Upcoming Events" 
    {...props} 
    component={EventTiles} 
    linkText="All Events" 
    footerLink="/all-events"
    filterCallback={(event, i) => i < 3} />;
