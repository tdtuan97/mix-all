import React, {Component} from "react";

import HomePage from "./HomePage";
import {connect} from "react-redux";
import {setCurrentAudio, getListAudio} from "../../redux/actions";
import _ from "lodash";

class Container extends Component {
    render() {
        return (
            <HomePage/>
        );
    }

    componentDidMount() {
        this.props.getListAudio();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let currentMusic = this.props.music;
        if (prevProps.music.listAudio !== currentMusic.listAudio) {
            if (!_.isEmpty(currentMusic.listAudio)) {
                this.props.setCurrentAudio(currentMusic.listAudio[0])
            }
        }
    }
}

function mapStateToProps(state) {
    return {
        router: state.router,
        music: state.music,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListAudio: () => {
            dispatch(getListAudio())
        },
        setCurrentAudio: (currentAudio) => {
            dispatch(setCurrentAudio(currentAudio))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)