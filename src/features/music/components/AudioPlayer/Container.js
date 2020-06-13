import React, {Component} from "react";

import AudioPlayer from "./AudioPlayer";
import {connect} from "react-redux";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false
        }
    }

    audio = new Audio(require('../../src/DemTrangTinhYeuAcoustic - ThanhGoll.mp3'));

    handleTogglePlay = () => {
        this.setState({
            isPlay: !this.state.isPlay
        }, () => {
            this.state.isPlay ? this.audio.play() : this.audio.pause();
        });
    }

    handleChangeSlider = (value) => {
        console.log(value);
    }

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({play: false}));
    }

    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({play: false}));
    }

    render() {
        let currentAudio = {
            id: 1,
            title: 'Đêm Trăng Tình Yêu',
            artist: 'Thanh Goll',
            url: '/',
        }

        return (
            <AudioPlayer
                {...this.state}
                handleTogglePlay={this.handleTogglePlay}
                handleChangeSlider={this.handleChangeSlider}
                currentAudio={currentAudio}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        router: state.router
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)