import React from "react";
import Nav from "./Nav";
import NewEventForm from "./NewEventForm";
import EditForm from "./EditForm";
import Event from "./Event";
import AllEvents from "./AllEvents";
import UpcomingEvents from "./UpcomingEvents";
import DeleteEvent from "./DeleteEvent";
// import BurgerIcon from "./BurgerIcon";
// import Popup from "reactjs-popup";

import "../style.css";
import {Switch, Route} from "react-router-dom";

function App(props){
    return (
        <div>
            <Nav />
            <Event />
            {/* <h1> YAY FOR MY BOOKCLUB APP</h1> */}
            {/* <Switch>
                <Route exact path="/Nav" component={Nav}></Route>
                <Route exact path="/Form" component={Form}></Route>
                <Route exact path="/EditForm" component={EditForm}></Route>
                <Route exact path="/Event" component={Event}></Route>
                <Route exact path="/AllEvents" component={AllEvents}></Route>
                <Route exact path="/UpcomingEvents" component={UpcomingEvents}></Route>
                <Route exact path="/DeleteEvent" component={DeleteEvent}></Route>
            </Switch> */}
        </div>
    )
}

export default App;