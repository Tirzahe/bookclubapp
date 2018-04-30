import axios from "axios";

//api's ??

const initialEventState = {
    data: [],
    loading: true,
    erMsg: ""
}

const eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case "GET_EVENTS": {
            return {
                ...state,
                loading: false,
                data: action.events
            }
        }
        //create
        //edit
        //delete
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
export const deleteEvent = (id) => {

    axios.delete("/events/" + id)
}

export default eventReducer;
