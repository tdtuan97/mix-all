import React, {Component} from "react";

import {connect} from "react-redux";
import {
    loadAudio,
    playAudio,
    pauseAudio,
    stopAudio,
    scrollBehavior,
    trackingAudio,
    setCurrentAudio
} from "../../../../redux/actions";
import PlaylistAudio from './PlaylistAudio';

class Container extends Component {

    handleTogglePlay = () => {
        let music = this.props.music;
        if (music.isPlay) {
            this.props.pauseAudio();
        } else {
            this.props.playAudio();
        }
    }

    render() {
        let {status, isPlay, duration, seconds, currentAudio} = this.props.music;
        return (
            <div className="playlist-audio-container">
                <PlaylistAudio
                    status={status}
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
                    currentAudio={currentAudio}
                    handleTogglePlay={this.handleTogglePlay}
                />
            </div>

        );
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
        loadAudio: (initialState) => {
            dispatch(loadAudio(initialState))
        },
        playAudio: () => {
            dispatch(playAudio())
        },
        pauseAudio: () => {
            dispatch(pauseAudio())
        },
        stopAudio: (seconds) => {
            dispatch(stopAudio(seconds))
        },
        trackingAudio: (seconds) => {
            dispatch(trackingAudio(seconds))
        },
        scrollBehavior: (seconds) => {
            dispatch(scrollBehavior(seconds))
        },
        setCurrentAudio: (currentAudio) => {
            dispatch(setCurrentAudio(currentAudio))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)