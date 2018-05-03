import React, { Component } from "react";
import { connect } from 'react-redux';
import { getEvents } from "../redux/events.js"
import { Switch, Route, withRouter } from "react-router-dom";


import NewEventForm from "./NewEventForm";
import EditForm from "./EditForm";
import Event from "./Event";
import Events from "./Events";
// import DeleteEvent from "./DeleteEvent";
import HomePage from "./HomePage";
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
                <Switch>
                    <Route exact path="/" component={HomePage}/>

                    <Route path="/create-new" component={NewEventForm}></Route>

                    <Route path="/edit-form/:monkeyPantsDance" component={EditForm}></Route>

                    <Route path="/event/:id" component={Event}></Route>

                    <Route path="/all-events" render={(props) => <Events pageTitle="All Events" linkText="Upcoming Events"{...props} component={Events} />}
                    ></Route>

                    <Route exact path="/upcoming-events" render={(props) => <Events pageTitle="Upcoming Events" {...props} component={Events} linkText="All Events" footerLink="/all-events"
                     filterCallback={(event, i) => i < 3} />}></Route>

                    {/* <Route path="/delete-event" component={DeleteEvent}></Route> */}
                </Switch>
            </div>
        )
    }
}

export default withRouter(connect(null, { getEvents })(App));