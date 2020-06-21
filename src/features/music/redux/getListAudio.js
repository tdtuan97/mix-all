import {GET_LIST_AUDIO} from "./constants";
import axios from "axios";

import db from "../database/firestore"

const refMusic = db.collection('t_music')

export function getListAudio() {
    let url = 'http://localhost:8080/api/v1/music';

    return dispatch => {
        // Use server google
        return getListAudioFirestore(dispatch);

        //Use server nodejs
        return axios.get(url, {})
            .then(response => {
                dispatch(getListAudioAction(response.data))
            }).catch(error => {
                // Server not response
                console.log(error)
            }).finally(() => {

            });
    }
}

export function getListAudioFirestore(dispatch) {
    return refMusic.get().then(snapshot => {
        let list = [];
        snapshot.forEach(doc => {
            let item = {
                id: doc.id,
                ...doc.data()
            }
            list.push(item);
        });
        let dataRes = {
            data: list,
            message: 'Data from firestore'
        }
        dispatch(getListAudioAction(dataRes))
    }).catch(error => {
        console.log(error)
    });
}

export function getListAudioAction(data) {
    return {
        type: GET_LIST_AUDIO,
        payload: data
    };
}

export function reducer(state, action) {
    let payload = action.payload;
    switch (action.type) {
        case GET_LIST_AUDIO:
            return {
                ...state,
                listAudio: payload.data
            };

        default:
            return state;
    }
}