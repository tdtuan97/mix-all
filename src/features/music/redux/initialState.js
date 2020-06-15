// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.

const initialState = {
    status: null,
    isPlay: false,
    seconds: 0,
    duration: 0,
    percentSlider: 0,
    src: 'http://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/96fab1a89eef77b12efe/7369862464632933487?authen=exp=1592297437~acl=/96fab1a89eef77b12efe/*~hmac=04960079caf557563cff4e8b97f55fbb'
};

export default initialState;
