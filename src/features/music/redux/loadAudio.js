import {LOAD_AUDIO} from "./constants";

export function loadAudio(initialState) {
    return {
        type: LOAD_AUDIO,
        payload: initialState
    };
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case LOAD_AUDIO:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
}
