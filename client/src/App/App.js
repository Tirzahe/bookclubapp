import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from "../redux/events.js"
import { Switch, Route, withRouter } from "react-router-dom";


import NewEventForm from "./NewEventForm";
import EditForm from "./EditForm";
import Event from "./Event";
import EventTiles from "./EventTiles";
import HomePage from "./HomePage";
import AllEvents from './AllEvents';
import UpcomingEvents from './UpcomingEvents';


class App extends Component {
    componentDidMount() {
        this.props.getEvents();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>

                    <Route path="/create-new" component={NewEventForm}></Route>

                    <Route path="/edit-form/:monkeyPantsDance" component={EditForm}></Route>

                    <Route path="/event/:id" component={Event}></Route>

                    <Route path="/all-events" render={AllEvents}
                    ></Route>

                    <Route exact path="/upcoming-events" render={UpcomingEvents}></Route>
                     {/* filterCallback={((event, i) => i < 3) && (i => Date.now())} />}></Route> */}
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getEvents })(App));