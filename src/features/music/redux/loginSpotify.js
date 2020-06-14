import axios from "axios";
import {LOGIN_SPOTIFY} from "./constants";

export function loginSpotify() {
    return {
        type: LOGIN_SPOTIFY,
    };
}

export function reducer(state, action) {
    let payload = action.payload
    switch (action.type) {
        case LOGIN_SPOTIFY:
            return {
                ...state,
                src: payload.src
            };

        default:
            return state;
    }
}

export function scopeSpotify() {
    //let config = authStore.getConfigHeader(params);
  /*  app.get('/login', function(req, res) {
        var scopes = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize' +
            '?response_type=code' +
            '&client_id=' + my_client_id +
            (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
            '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });*/

    let config = {
        client_id: 'e3e5c1773e2d42ba92b05dd84f9c7249', // Your client id
        client_secret: '1c326c5e080449e2bb296f158ddf4453', // Your secret
        redirect_uri: '/music' // Your redirect uri
    }

    let scopes = 'user-read-private user-read-email';
    let url = 'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + config.client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('/music');
    return dispatch => {
        return axios.get(url, {})
            .then(response => {
                dispatch(loginSpotify())
            }).catch(error => {

            }).finally(() => {

            });
    }

    //return getAudio(null);
}