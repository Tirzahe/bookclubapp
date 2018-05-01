import React from 'react'

const Event = () => {
    return(
        <div className="event">
            {/* insert nav here */}
            <header>
                <h1 className="eventDate">DAY MTH 01 - Hr</h1>
                <h5 className="hostName">Host: Host Name</h5>
                <h5 className="eventAddress">eventAddress</h5>
                <h1 className="bookTitle">Book Title</h1>
                <h4 className="bookAuthor">Author: Airote Th'bük</h4>
            </header>
            
            <p className="blurb" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {/* post MVP ideas: */}
            {/* <img src="good reads API" alt="book cover"/> */}
            {/* pull review or quote from good reads API*/}
            {/* ratings stars from GoodReads API */}
            {/* comments & masking comments based on spoiler alert status*/}
            <div className="footer">
                <a href="./AllEvents.js">All</a>
                <a href="./UpcomingEvents.js">Upcoming</a>
            </div>
        </div>
    )
}

export default Event;