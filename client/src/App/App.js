import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from "../redux/events.js"
import { Switch, Route, withRouter } from "react-router-dom";


import NewEventForm from "./NewEventForm";
import EditForm from "./EditForm";
import Event from "./Event";
import AllEvents from "./AllEvents";
import HomePage from "./HomePage";


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

                    <Route path="/all-events" render={(props) => <AllEvents pageTitle="All Events" linkText="Upcoming Events"{...props} component={AllEvents} />}
                    ></Route>

                    <Route exact path="/upcoming-events" render={(props) => <AllEvents pageTitle="Upcoming Events" {...props} component={AllEvents} linkText="All Events" footerLink="/all-events"
                     filterCallback={(event, i) => i < 3} />}></Route>
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getEvents })(App));