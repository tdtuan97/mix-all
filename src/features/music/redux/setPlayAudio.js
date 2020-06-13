import {SET_PLAY_AUDIO} from "./constants";

export function setPlayAudio() {
    return {
        type: SET_PLAY_AUDIO
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case SET_PLAY_AUDIO:
            return {
                ...state,
                isPlay: true,
            };

        default:
            return state;
    }
}
