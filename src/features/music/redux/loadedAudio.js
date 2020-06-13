import {LOADED_AUDIO} from "./constants";

export function loadedAudio(initialState) {
    return {
        type: LOADED_AUDIO,
        payload: initialState
    };
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case LOADED_AUDIO:
            return {
                ...state,
                ...payload
            };

        default:
            return state;
    }
}
