import {GET_AUDIO} from "./constants";

export function getAudio(src) {
    return {
        type: GET_AUDIO,
        payload: {
            src: src
        }
    };
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case GET_AUDIO:
            return {
                ...state,
                src: payload.src
            };

        default:
            return state;
    }
}