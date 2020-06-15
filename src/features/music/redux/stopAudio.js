import {STOP_AUDIO} from "./constants";

export function stopAudio() {
    return {
        type: STOP_AUDIO
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case STOP_AUDIO:
            return {
                ...state,
                status: 'stopped',
                isPlay: false,
            };

        default:
            return state;
    }
}
