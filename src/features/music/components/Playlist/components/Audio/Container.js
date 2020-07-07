import React, { Component } from 'react';

import { connect } from 'react-redux';
import {
    setCurrentAudio,
} from '../../../../redux/actions';
import Audio from './Audio';
import _ from 'lodash';

class Container extends Component {

    handleSelectAudio = (e) => {
        let index = e.currentTarget.value;
        let listAudio = this.props.music.listAudio;
        let targetAudio = listAudio[index];

        if (!_.isEmpty(targetAudio)) {
            this.props.setCurrentAudio(targetAudio);
        }
    };

    render() {
        let { status, isPlay, duration, seconds, currentAudio, listAudio } = this.props.music;
        let audio = listAudio[this.props.index];
        let classDisplay = audio !== currentAudio ? 'playlist-audio-container'
            : 'playlist-audio-container active';
        return (
            <div className={classDisplay}>
                <Audio
                    handleSelectAudio={this.handleSelectAudio}
                    status={status}
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
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