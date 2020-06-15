import React, {Component} from "react";

import AudioPlayer from "./AudioPlayer";
import {connect} from "react-redux";
import {
    getAudio,
    loadAudio,
    playAudio,
    pauseAudio,
    stopAudio,
    scrollBehavior,
    trackingAudio
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

    handleEnded = () => {
        this.refs.audioRef.currentTime = 0;
        this.props.stopAudio();
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

    componentDidMount() {
        let url = 'http://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/96fab1a89eef77b12efe/7369862464632933487?authen=exp=1592297437~acl=/96fab1a89eef77b12efe/*~hmac=04960079caf557563cff4e8b97f55fbb'
        this.props.getAudio(url);
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
        let currentAudio = {
            id: 1,
            title: 'Tình Yêu Mang Theo',
            artist: 'Thanh Goll',
            src: 'http://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/96fab1a89eef77b12efe/7369862464632933487?authen=exp=1592297437~acl=/96fab1a89eef77b12efe/*~hmac=04960079caf557563cff4e8b97f55fbb',
        }
        let {status, isPlay, duration, seconds, src} = this.props.music;
        return (
            <div className="music-player-container">
                <AudioPlayer
                    status={status}
                    isPlay={isPlay}
                    duration={duration}
                    seconds={seconds}
                    currentAudio={currentAudio}
                    handleTogglePlay={this.handleTogglePlay}
                    handleChangeSlider={this.handleChangeSlider}
                />
                {
                    src !== null ?
                        <audio
                            ref="audioRef"
                            src={src}
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
        getAudio: (src) => {
            dispatch(getAudio(src))
        },
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)