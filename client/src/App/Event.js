import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEvent } from '../redux/events';
import Nav from "./Nav";

const Event = (props) => {
    const { loading, data, errMsg, match } = props;
    if (loading) {
        return <p>Loading...</p>
    }
    if (errMsg) {
        return <p>{ errMsg }</p>
    }
    
console.log("PROPS:", props);

    const event = data.filter(event => {
        return match.params.id === event._id
    })
    const handleClick =(e) =>{
        props.deleteEvent(event[0]._id);
    }
    return (
        <div>
            <Nav />
            <header>
                <h1 className="eventDate">{moment(event[0].date).format('MMMM DD')}</h1>
                <h5 className="hostName">Host: {event[0].host}</h5>
                <h5 className="eventAddress">{event[0].address}</h5>
                <h1 className="bookTitle">{event[0].book.title}</h1>
                <h4 className="bookAuthor">Author: {event[0].book.author}</h4>
            </header>
            <section>
                <p className="blurb" >
                    {event[0].book.quote}
                </p>
            </section>
            <div className="footer">
                <Link to={"/edit-form/" + event[0]._id}  className="editLink">Edit</Link>
                {/* <EditForm id={event[0]._id}/> */}
                <Link  to="/all-events" onClick={handleClick} className="allEventsLink">Delete</Link>
            </div>
        </div>
    )
};


const mapToStateToProps = (state) =>{
    return state.events
}

export default connect(mapToStateToProps, {deleteEvent})(Event);