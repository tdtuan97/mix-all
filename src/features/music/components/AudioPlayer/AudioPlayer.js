import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Card} from "antd";

class AudioPlayer extends Component {

    render() {
        let {currentAudio} = this.props;
        let {status} = this.props;
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
                </Card>
            </div>
        );
    }
}

AudioPlayer.propTypes = {
    currentAudio: PropTypes.object,
};

export default AudioPlayer