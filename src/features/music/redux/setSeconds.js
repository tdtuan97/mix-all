import {SET_SECONDS} from "./constants";

export function setSeconds(seconds) {
    return {
        type: SET_SECONDS,
        payload: {
            seconds: seconds
        }
    };
}

export function reducer(state, action) {
    let payload = action.payload;
    switch (action.type) {
        case SET_SECONDS:
            return {
                ...state,
                seconds: payload.seconds
            };

        default:
            return state;
    }
}
