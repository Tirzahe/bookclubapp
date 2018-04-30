import React from 'react'

const Event = () => {
    return(
        <div className="event">
            <h1 className="eventDate">DAY MTH 01 - Hr</h1>
            <h5 className="hostName">Host: Host Name</h5>
            <h5 className="eventAddress">eventAddress</h5>
            <h1 className="bookTitle">Book Title</h1>
            <h4 className="bookAuthor">Author: Iwrote The'book</h4>
            
            <p className="review" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {/* post MVP ideas: */}
            {/* <img src="good reads API" alt="book cover"/> */}
            {/* pull review or quote from good reads API*/}
            {/* ratings stars from GoodReads API */}
            {/* comments */}


        </div>
    )
}

export default Event;