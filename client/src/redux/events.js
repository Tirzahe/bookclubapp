import axios from "axios";

//api's ??

const initialEventState = {
    data: [],
    loading: true,
    errMsg: ""
}

const eventReducer = (state = initialEventState, action) => {
    switch (action.type) {
        case "GET_EVENTS":
            return {
                ...state,
                loading: false,
                data: action.events
            };
        case "DELETE_EVENT":
            return {
                ...state,
                loading: false,
                data: state.data.filter(event => event._id !== action.id)
            }
        case "CREATE_EVENT":
            return {
                ...state,
                loading: false,
                data: [...state.data, action.event]
            }
        case "EDIT_EVENT":
            return {
                ...state,
                loading: false,
                data: state.data.map(event => {
                    if (event._id === action.id) {
                        return action.editedEvent
                    } else {
                        return event
                    }
                })
            }
        default:
            return state;
    }
}


export const createEvent = (inputs, goToLocation) => {
    return dispatch => {
        axios.post("/api/events", inputs)
            .then(response => {
                dispatch({
                    type: "CREATE_EVENT",
                    event: response.data
                });
                goToLocation("/all-events");
            })
    }
}

export const getEvents = () => {
    return dispatch => {
        axios.get("/api/events")
            .then(response => {
                dispatch({
                    type: "GET_EVENTS",
                    events: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Data Unavailable"
                });
            });
    }
}
export const deleteEvent = (id) => {
    return dispatch => {
        axios.delete("/api/events/" + id)
            .then(response => {
                dispatch({
                    type: "DELETE_EVENT",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Data Unavailable"
                });
            });
    }
}
export const editEvent = (id, inputs, goToLocation) => {
    return dispatch => {
        axios.put("/api/events/" + id, inputs)
            .then(response => {
                dispatch({
                    type: "EDIT_EVENT",
                    editedEvent: response.data,
                    id
                })
                goToLocation("/event/" + id)
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Data Unavailable"
                });
            });
    }
}



export default eventReducer;
