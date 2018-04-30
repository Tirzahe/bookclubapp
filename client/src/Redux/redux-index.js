import { createstore combinereducer, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import eventReducer from "./events";

const globalState = {
    events: eventReducer
};

const store = createStore(eventReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;