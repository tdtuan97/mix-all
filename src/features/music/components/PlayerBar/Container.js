import React, {Component} from "react";
import _ from "lodash";
import {connect} from "react-redux";

import PlayerBar from "./PlayerBar";

import {
    loadAudio,
    playAudio,
    pauseAudio,
    stopAudio,
    scrollBehavior,
    trackingAudio,
    setCurrentAudio
} from "../../redux/actions";


class Container extends Component {

    handleTogglePlay = () => {
        let music = this.props.music;
        if (music.isPlay) {
            this.props.pauseAudio();
        } else {
            this.props.playAudio();
        }
    }

    handleGetNextAudio = () => {
        let music = this.props.music;
        let {listAudio, currentAudio} = music;
        let nextAudio = this.getNextItem(listAudio, currentAudio);
        if (!_.isEmpty(nextAudio)) {
            this.props.setCurrentAudio(nextAudio);
        }
    }

    getNextItem = (array, item) => {
        let index = array.indexOf(item);
        let length = array.length;
        if (index !== -1) {
            let nextIndex = index + 1;
            if (nextIndex === length) {
                nextIndex = 0;
            }
            return array[nextIndex];
        }
        return null;
    }

    handleGetPreviousAudio = () => {
        let music = this.props.music;
        let {listAudio, currentAudio} = music;
        let previousAudio = this.getPreviousItem(listAudio, currentAudio);
        if (!_.isEmpty(previousAudio)) {
            this.props.setCurrentAudio(previousAudio);
        }
    }

    getPreviousItem = (array, item) => {
        let index = array.indexOf(item);
        let length = array.length;
        if (index !== -1) {
            let previousIndex = index - 1;
            if (previousIndex === -1) {
                previousIndex = length - 1;
            }
            return array[previousIndex];
        }
        return null;
    }

    isLastItem = (array, item) => {
        let index = array.indexOf(item);
        let length = array.length;
        return !(index !== -1 && index < (length - 1));
    }

    handleEnded = () => {
        this.refs.audioRef.currentTime = 0;
        let music = this.props.music;
        let {listAudio, currentAudio, typeLoop} = music;
        if (this.isLastItem(listAudio, currentAudio) && typeLoop === 'none') {
            this.props.stopAudio();
        }
        this.handleGetNextAudio();
    }

    handleTimeUpdate = () => {
        let seconds = this.refs.audioRef.currentTime;
        this.props.trackingAudio(seconds);
    }

    handleLoadedData = () => {
        let duration = this.refs.audioRef.duration;
        let isPlay = !this.refs.audioRef.paused;
        let status = isPlay ? 'playing' : null;
        let initialState = {
            status: status,
            isPlay: isPlay,
            seconds: 0,
            duration: duration,
            percentSlider: 0
        };

        this.props.loadAudio(initialState);
    }

    handleChangeSlider = (seconds) => {
        this.refs.audioRef.currentTime = seconds;
        this.props.scrollBehavior(seconds);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            let music = this.props.music;

            switch (music.status) {
                case 'playing':
                    this.refs.audioRef.play();
                    break;
                case 'paused':
                    this.refs.audioRef.pause();
                    break;
                case 'stopped':
                    this.refs.audioRef.pause();
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        let {status, isPlay, duration, seconds, currentAudio} = this.props.music;
        return (
            <div className="player-bar-container">
                <PlayerBar
                    status={status}
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
                    currentAudio={currentAudio}
                    handleTogglePlay={this.handleTogglePlay}
                    handleChangeSlider={this.handleChangeSlider}
                    handleGetNextAudio={this.handleGetNextAudio}
                    handleGetPreviousAudio={this.handleGetPreviousAudio}
                />
                {
                    currentAudio.url !== null ?
                        <audio
                            ref="audioRef"
                            src={currentAudio.url}
                            onLoadedData={this.handleLoadedData}
                            onTimeUpdate={this.handleTimeUpdate}
                            onEnded={this.handleEnded}
                            autoPlay
                        /> : null
                }

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