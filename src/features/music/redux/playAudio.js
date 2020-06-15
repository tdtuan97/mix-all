import {PLAY_AUDIO} from "./constants";

export function playAudio() {
    return {
        type: PLAY_AUDIO
    };
}

export function reducer(state, action) {
    switch (action.type) {
        case PLAY_AUDIO:
            return {
                ...state,
                status: 'playing',
                isPlay: true,
            };

        default:
            return state;
    }
}
