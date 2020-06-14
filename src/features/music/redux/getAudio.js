import axios from "axios";
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

export function getFileAudio(url) {
    //let config = authStore.getConfigHeader(params);
    url = 'ftp://127.0.0.1/music/DemTrangTinhYeuAcoustic-ThanhGoll.mp3';
    console.log(getFileAudio)
    return dispatch => {
       // dispatch(processAction.pushProcessAction(process));
        return axios.get(url, {})
            .then(response => {
                dispatch(getAudio);
                //thenFunction(dispatch, response, GET_ACTION);
            }).catch(error => {
                //errorAction.catchFunction(dispatch, error)
            }).finally(() => {
               // errorAction.finallyFunction(dispatch, process)
            });

    }

    //return getAudio(null);
}