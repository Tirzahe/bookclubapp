import axios from "axios";

//api's ??

const initialEventState = {
    data:[],
    loading: true,
    erMsg: ""
    //fix this to match data coming in.
} 

eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case "GET_EVENTS": {
            return {
                ...state,
                loading: false,
                data: action.events
            }
        }
        default:
            return state;
    }
}

export const getEvents = () => {
    return dispatch => {
        axios.get("/events")
        .then(response => {
            dispatch({
                type: "GET_EVENTS",
                events: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: "ERR_MSG",
                err: "Data Unavailable"
            });
        });
    }
}

export default eventReducer;