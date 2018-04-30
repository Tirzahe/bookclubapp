import React from "react";
import Form from "./Form";
import Event from "./Event";
import AllEvents from "./AllEvents";

import {Switch, Route} from "react-router-dom";

function App(props){
    return (
        <div>
            {/* <h1> YAY FOR MY BOOKCLUB APP</h1> */}
            <AllEvents />
            {/* <Form />
            <Event /> */}
            {/* <Switch>
                <Route exact path="/Form.js" component={Form}></Route>
                <Route exact path="/Event.js" component={Event}></Route>
                <Route exact path="/AllEvents.js" component={AllEvents}></Route>
            </Switch> */}
        </div>
    )
}

export default App;