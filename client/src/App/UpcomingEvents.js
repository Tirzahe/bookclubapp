import React from 'react';
import EventTiles from './EventTiles.js';

//TODO connect this component to redux,
// retrieve the events and pass them to Event tiles

export default (props) => <EventTiles 
    pageTitle="Upcoming Events" 
    {...props} 
    component={EventTiles} 
    linkText="All Events" 
    footerLink="/all-events"
    filterCallback={(event, i) => i < 3} />;
    {/* filterCallback={((event, i) => i < 3) && (i => Date.now())} />} */}

