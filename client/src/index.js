import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-index";
import { BrowserRouter } from "react-router-dom";

import App from "./App/App";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./redux";
import App from "./App/"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);