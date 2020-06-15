import {SCROLL_BEHAVIOR} from "./constants";

export function scrollBehavior(seconds) {
    return {
        type: SCROLL_BEHAVIOR,
        payload: {
            seconds: seconds
        }
    };
}

export function reducer(state, action) {
    let payload = action.payload;
    switch (action.type) {
        case SCROLL_BEHAVIOR:
            return {
                ...state,
                seconds: payload.seconds
            };

        default:
            return state;
    }
}
