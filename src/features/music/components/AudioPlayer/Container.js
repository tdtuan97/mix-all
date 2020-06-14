import React, {Component} from "react";

import AudioPlayer from "./AudioPlayer";
import {connect} from "react-redux";
import {getAudio, loadedAudio, setPauseAudio, setPlayAudio, trackingAudio} from "../../redux/actions";

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

    handleEnded = () => {
        this.props.setPauseAudio();
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

    componentDidMount() {
        let url = 'http://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/96fab1a89eef77b12efe/7369862464632933487?authen=exp=1592297437~acl=/96fab1a89eef77b12efe/*~hmac=04960079caf557563cff4e8b97f55fbb'
        this.props.getAudio(url);
    }

    render() {
        let currentAudio = {
            id: 1,
            title: 'Tình Yêu Mang Theo',
            artist: 'Thanh Goll',
            src: 'http://vnso-zn-5-tf-mp3-s1-zmp3.zadn.vn/96fab1a89eef77b12efe/7369862464632933487?authen=exp=1592297437~acl=/96fab1a89eef77b12efe/*~hmac=04960079caf557563cff4e8b97f55fbb',
        }
        let {isPlay, duration, seconds, src} = this.props.music;
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