import {GET_LIST_AUDIO} from "./constants";
import axios from "axios";

export function getListAudio() {
    let url = 'http://localhost:8080/api/v1/music';
    return dispatch => {
        return axios.get(url, {})
            .then(response => {
                console.log(response)
                return {
                    type: GET_LIST_AUDIO,
                    payload: response
                };
            }).catch(error => {

            }).finally(() => {

            });
    }
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case GET_LIST_AUDIO:
            return {
                ...state,
                list: payload.data
            };

        default:
            return state;
    }
}