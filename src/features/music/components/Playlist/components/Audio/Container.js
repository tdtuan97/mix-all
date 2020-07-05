import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
    setCurrentAudio,
} from '../../../../redux/actions';
import Audio from './Audio';

class Container extends Component {

    handleSelectAudio = () => {
        console.log('click');
    }

    render() {
        let { status, isPlay, duration, seconds, currentAudio, listAudio } = this.props.music;
        let audio = listAudio[this.props.index];
        return (
            <div className="playlist-audio-container">
                <Audio
                    handleSelectAudio={this.handleSelectAudio}
                    status={status}
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
                    currentAudio={currentAudio}
                    audio={audio}
                    index={this.props.index}
                />
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        router: state.router,
        music: state.music,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentAudio: (currentAudio) => {
            dispatch(setCurrentAudio(currentAudio));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);