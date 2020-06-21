import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Card, Slider} from "antd";
import {
    FastBackwardOutlined,
    BackwardOutlined,
    PlayCircleOutlined,
    ForwardOutlined,
    FastForwardOutlined,
    PauseCircleOutlined
} from "@ant-design/icons";

class AudioPlayer extends Component {

    formatTimeDuration = (seconds) => {
        return this.formatTime(seconds);
    }

    formatTime = (seconds) => {
        let minutes = Math.floor((seconds) / 60);
        seconds = seconds - (minutes * 60);
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ':' + seconds;
    }

    render() {
        let {currentAudio} = this.props;
        let {isPlay, seconds, duration, status} = this.props;
        let {
            handleTogglePlay,
            handleChangeSlider,
            handleGetNextAudio,
            handleGetPreviousAudio,
        } = this.props;
        let imagePlayer = require("../../images/player.png");
        let playerImageClass;
        switch (status) {
            case 'playing':
                playerImageClass = "player-image playing"
                break;
            case 'paused':
                playerImageClass = "player-image paused"
                break;
            case 'stopped':
                playerImageClass = "player-image stopped"
                break;
            default:
                playerImageClass = "player-image"
                break;
        }

        return (
            <div className="music-player-presentational">
                <Card className="music-player-wrapper">
                    <div className="player-image-component player-component">
                        <img className={playerImageClass}
                             src={imagePlayer}
                             alt="player"/>
                    </div>
                    <div className="player-description player-component">
                        <div className="player-title description">
                            {currentAudio.title}
                        </div>
                        <div className="player-artist description">
                            {currentAudio.artist}
                        </div>
                    </div>
                    <div className="player-slider player-component">
                        <Slider
                            value={seconds}
                            onChange={handleChangeSlider}
                            min={0}
                            max={duration}
                            tipFormatter={this.formatTimeDuration}
                        />
                    </div>
                    <div className="player-controller player-component">
                        <div className="controller-action" onClick={handleGetPreviousAudio}>
                            <FastBackwardOutlined className="action-icon"/>
                        </div>
                        <div className="controller-action">
                            <BackwardOutlined className="action-icon"/>
                        </div>
                        <div className="controller-action" onClick={handleTogglePlay}>
                            {
                                isPlay ?
                                    <PauseCircleOutlined className="action-icon"/>
                                    : <PlayCircleOutlined className="action-icon"/>
                            }
                        </div>
                        <div className="controller-action">
                            <ForwardOutlined className="action-icon"/>
                        </div>
                        <div className="controller-action" onClick={handleGetNextAudio}>
                            <FastForwardOutlined className="action-icon"/>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

AudioPlayer.propTypes = {
    currentAudio: PropTypes.object,
};

export default AudioPlayer