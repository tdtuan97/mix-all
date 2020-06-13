import './style.scss';
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
    render() {
        let {currentAudio} = this.props;
        let {isPlay, handleTogglePlay, handleChangeSlider} = this.props;
        let imagePlayer = require("../../images/player.png");
        return (
            <div className="music-player-container">
                <Card className="music-player-wrapper">
                    <div className="player-image-component player-component">
                        <img className="player-image" src={imagePlayer} alt="player"/>
                    </div>
                    <div className="player-description player-component">
                        <div className="player-title description">
                            {currentAudio.title}
                        </div>
                        <div className="player-artist description">
                            {currentAudio.artist}
                        </div>
                    </div>
                    <div className="player-component">
                        <Slider defaultValue={0} onChange={handleChangeSlider}/>
                    </div>
                    <div className="player-controller player-component">
                        <div className="controller-action">
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
                        <div className="controller-action">
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