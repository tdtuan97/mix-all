import {SET_CURRENT_AUDIO} from "./constants";

export function setCurrentAudio(currentAudio) {
    return {
        type: SET_CURRENT_AUDIO,
        payload: {
            currentAudio: currentAudio
        }
    };
}

export function reducer(state, action) {
    let payload = action.payload;
    switch (action.type) {
        case SET_CURRENT_AUDIO:
            return {
                ...state,
                currentAudio: payload.currentAudio
            };

        default:
            return state;
    }
}