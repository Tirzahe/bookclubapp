import React, { Component } from 'react';
import { createEvent } from '../redux/events.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class NewEventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            host: "",
            address: "",
            book: {
                title: "",
                author: "",
                quote: ""
            }
        };

    }
    handleEventChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    handleBookChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState,
                book: {
                    ...prevState.book,
                    [name]: value
                }
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(e);
        this.props.createEvent(this.state, this.props.history.push);
    }
    render() {
        return (
            <div>
                <Nav />
                <header>
                    <h1>Create New Event</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor=""> 
                        <input name="host" value={this.state.host} onChange={this.handleEventChange} />Host Name
                    </label>
                    <label htmlFor=""> 
                        <input name="address" value={this.state.address} onChange={this.handleEventChange} />Event Location
                    </label>
                    <label htmlFor="">
                        <input name="date" type="text" value={this.state.date} onChange={this.handleEventChange} />Date
                    </label>
                    {/* for date is ther a way to just select from a calendar? */}
                    <label htmlFor="">
                        <input name="title" type="text" value={this.state.book.title} onChange={this.handleBookChange} />Title
                    </label>
                    <label htmlFor="">
                        <input name="author" type="text" value={this.state.book.author} onChange={this.handleBookChange} />Author
                    </label>
                    <label htmlFor="">
                        <input name="quote" className="quote" type="text" value={this.state.book.quote} onChange={this.handleBookChange} />Quote
                    </label>
                    <button className="createEventButton">Create Event
                    </button>
                    <Link to="/all-events" className="cancel"><button>Cancel</button></Link>
                </form>
                <div className="footer">
                    <ul className="footer">
                        <li>&copy; 2018</li>
                        <li>By, Tirzah Evangelista</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect(null, { createEvent })(NewEventForm);