import {TRACKING_AUDIO} from "./constants";

export function trackingAudio(seconds) {
    return {
        type: TRACKING_AUDIO,
        payload: {
            seconds: seconds
        }
    };
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case TRACKING_AUDIO:
            return {
                ...state,
                seconds: payload.seconds
            };

        default:
            return state;
    }
}
