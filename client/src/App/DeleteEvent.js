// NOT CURRENTLY IN USE
// 
// import React from 'react';
// import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import EventTile from './EventTile';

// const DeleteEvent = () => {
//     const { loading, data, errMsg } = this.props.events;
//     if (loading){
//         return <p>Loading...</p>
//     }
//     if (errMsg){
//         return <p>{errMsg}</p>
//     }
//     const eventTiles =
//     data.map(event => {
//         return(
//         <EventTile key= {event._id}
//         event = {event}/>
//         )
//     })

//     return (
//         <div className="deleteEvent">
//             <header>
//                 <h2>Select an event to edit or delete</h2>
//             </header>
//             <main>
//                 {eventTiles}
//             </main>
//             <div>
//                 <Link to="/all-items" className="deleteEventLink">Delete Event</Link>
                    
//                 <Link to="/edit-form">Edit Event</Link>
//             </div>
        
//         </div>
//     )
// }


// const mapToStateToProps =(state) => {
//     return {
//         events: state.events
//     }
// }
// export default connect(mapToStateToProps)(DeleteEvent);