import React, {Component} from "react";

import AudioPlayer from "./AudioPlayer";
import {connect} from "react-redux";
import {loadedAudio, setPauseAudio, setPlayAudio, trackingAudio} from "../../redux/actions";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    handleTogglePlay = () => {
        let music = this.props.music;
        if (music.isPlay) {
            this.refs.audioRef.pause();
            this.props.setPauseAudio()
        } else {
            this.refs.audioRef.play();
            this.props.setPlayAudio();
        }
    }

    handleOnPlay = (second) => {
        console.log('handleOnPlay');
    }

    handleTimeUpdate = () => {
        let seconds = this.refs.audioRef.currentTime;
        this.props.trackingAudio(seconds);
    }

    handleLoadedData = () => {
        let duration = this.refs.audioRef.duration;
        let isPlay = !this.refs.audioRef.paused
        let initialState = {
            isPlay: isPlay,
            seconds: 0,
            duration: duration,
            percentSlider: 0
        };
        this.props.loadedAudio(initialState);
    }

    handleChangeSlider = (value) => {
        console.log(value);
    }

    render() {
        let currentAudio = {
            id: 1,
            title: 'Đêm Trăng Tình Yêu',
            artist: 'Thanh Goll',
            url: '/',
        }
        let {isPlay, duration, seconds} = this.props.music;
        return (
            <div>
                <AudioPlayer
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
                    handleTogglePlay={this.handleTogglePlay}
                    handleChangeSlider={this.handleChangeSlider}
                    currentAudio={currentAudio}
                />
                <audio
                    ref="audioRef"
                    src={require('../../src/DemTrangTinhYeuAcoustic - ThanhGoll.mp3')}
                    onLoadedData={this.handleLoadedData}
                    onTimeUpdate={this.handleTimeUpdate}
                    autoPlay
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
        loadedAudio: (initialState) => {
            dispatch(loadedAudio(initialState))
        },
        trackingAudio: (seconds) => {
            dispatch(trackingAudio(seconds))
        },
        setPlayAudio: () => {
            dispatch(setPlayAudio())
        },
        setPauseAudio: () => {
            dispatch(setPauseAudio())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)