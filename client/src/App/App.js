import React from "react";
import Form from "./Form";
import Event from "./Event"

function App(props){
    return (
        <div>
            <h1> YAY FOR MY BOOKCLUB APP</h1>
            <Switch>
                <Route exact path="/Form.js" component={Form}></Route>
                <Route exact path="/Event.js" component={Event}></Route>
            </Switch>
        </div>
    )
}

export default App;