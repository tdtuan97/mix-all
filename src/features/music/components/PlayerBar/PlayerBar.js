import React, {Component} from "react";
import {Card, Slider} from "antd";
import {
    PlayCircleOutlined,
    PauseCircleOutlined,
    MenuUnfoldOutlined,
    StepBackwardOutlined,
    StepForwardOutlined
} from "@ant-design/icons";

class PlayerBar extends Component {

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

        return (
            <div className="player-bar-presentational">
                <div className="player-bar-wrapper">
                    <div className="bar-controller bar-component">
                        <div className="bar-action" onClick={handleGetPreviousAudio}>
                            <StepBackwardOutlined className="action-icon"/>
                        </div>
                        <div className="bar-action" onClick={handleTogglePlay}>
                            {
                                isPlay ?
                                    <PauseCircleOutlined className="action-icon"/>
                                    : <PlayCircleOutlined className="action-icon"/>
                            }
                        </div>
                        <div className="bar-action" onClick={handleGetNextAudio}>
                            <StepForwardOutlined className="action-icon"/>
                        </div>
                    </div>
                    <div className="bar-main bar-component">
                        <div className="bar-main-image">
                            <img
                                 src={imagePlayer}
                                 alt="player"/>
                        </div>
                        <div className="bar-main-group-slider">
                            <div className="bar-main-description">
                                <div className="content-description">
                                    <div className="title-audio">
                                        {currentAudio.title}
                                    </div>
                                    <div className="space-content">
                                        -
                                    </div>
                                    <div className="artist-audio">
                                        {currentAudio.artist}
                                    </div>
                                </div>
                                <div className="timer-description">
                                    <div className="current-time">
                                        00
                                    </div>
                                    <div className="space-time">
                                        :
                                    </div>
                                    <div className="total-time">
                                        00
                                    </div>
                                </div>
                            </div>
                            <div className="bar-main-slider">
                                <Slider
                                    value={seconds}
                                    onChange={handleChangeSlider}
                                    min={0}
                                    max={duration}
                                    tipFormatter={this.formatTimeDuration}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bar-other bar-component">
                        <div className="button-toggle-current-playlist">
                            <div className="icon-playlist">
                                <MenuUnfoldOutlined/>
                            </div>
                            Playlist (1)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerBar