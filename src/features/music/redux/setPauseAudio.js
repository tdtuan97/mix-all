import {SET_PAUSE_AUDIO} from "./constants";

export function setPauseAudio() {
    return {
        type: SET_PAUSE_AUDIO
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case SET_PAUSE_AUDIO:
            return {
                ...state,
                isPlay: false,
            };

        default:
            return state;
    }
}
