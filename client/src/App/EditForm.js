import React, { Component } from 'react';
import { editEvent } from '../redux/events.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";


class EditForm extends Component {
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
            },
            loading: true,
            errMsg: ""
        };
    }
    componentDidMount() {
        axios.get("/api/events/" + this.props.match.params.monkeyPantsDance)
            .then(response => this.setState({
                ...response.data,
                loading: false
            }));
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
        this.props.editEvent(this.state._id, this.state, this.props.history.push);
    }
    render() {
        return (
            <div class>
                <Nav />
                <header>
                    <h1>EDIT EVENT</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Host Name
                        <input name="host" value={this.state.host} onChange={this.handleEventChange} />
                    </label>
                    <label htmlFor="">Event Location
                        <input name="address" value={this.state.address} onChange={this.handleEventChange} />
                    </label>
                    <label htmlFor="">Date
                        <input name="date" type="text" value={this.state.date} onChange={this.handleEventChange} />
                    </label>
                    {/* for date is ther a way to just select from a calendar? */}
                    <label htmlFor="">Title
                        <input name="title" type="text" value={this.state.book.title} onChange={this.handleBookChange} />
                    </label>
                    <label htmlFor="">Author
                        <input name="author" type="text" value={this.state.book.author} onChange={this.handleBookChange} />
                    </label>
                    <label htmlFor="">Quote
                        <input name="quote" type="text" value={this.state.book.quote} onChange={this.handleBookChange} />
                    </label>
                    <button className="createEventButton">Save Edit</button>
                    <Link to="/all-events" className="cancel">Cancel</Link>
                </form>
            </div>
        );
    }
}
export default connect(null, { editEvent })(EditForm);