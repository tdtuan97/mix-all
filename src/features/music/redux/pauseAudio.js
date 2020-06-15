import {PAUSE_AUDIO} from "./constants";

export function pauseAudio() {
    return {
        type: PAUSE_AUDIO
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case PAUSE_AUDIO:
            return {
                ...state,
                status: 'paused',
                isPlay: false,
            };

        default:
            return state;
    }
}
