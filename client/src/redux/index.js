import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import eventReducer from "./events";

import { getEvents } from "./events";

const globalState = {
    events: eventReducer
};

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(getEvents());

export default store;