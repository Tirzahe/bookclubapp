import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from "../redux/events";
import { Switch, Route, withRouter } from "react-router-dom";

import Nav from "./Nav";
import NewEventForm from "./NewEventForm";
import EditForm from "./EditForm";
import Event from "./Event";
import Events from "./Events";
import UpcomingEvents from "./UpcomingEvents";
import DeleteEvent from "./DeleteEvent";
// import BurgerIcon from "./BurgerIcon";
// import Popup from "reactjs-popup";

import "../style.css";

class App extends Component {
    componentDidMount() {
        this.props.getEvents();
    }
    render() {
        return (
            <div>
                <Nav />
                {/* <NewEventForm /> */}
                <Switch>
                    <Route path="/create-new" component={NewEventForm}></Route>
                    <Route path="/edit-form" component={EditForm}></Route>
                    <Route path="/event" component={Events}></Route>
                    <Route path="/all-events" component={Events}></Route>
                    <Route exact path="/" render={(props)=> <Events{...props} 
                     filterCallback={(event, i)=> i < 3}/>}></Route>
                    <Route path="/delete-event" component={DeleteEvent}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getEvents })(App));