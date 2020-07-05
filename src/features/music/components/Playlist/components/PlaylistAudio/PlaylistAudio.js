import React, { Component } from 'react';
import {
    HeartOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';
import { ActionIcon } from '../../../ActionIcon';

class PlaylistAudio extends Component {

    render() {
        let { currentAudio } = this.props;
        let imagePlayer = require('../../../../images/player.png');

        return (
            <div className="playlist-audio-president">
                <div className="playlist-audio">
                    <div className="audio-group-content">
                        <div className="audio-number content">
                            1
                        </div>
                        <div className="audio-image content">
                            <img className="audio-image-tag" src={imagePlayer} alt="image-content"/>
                        </div>
                        <div className="audio-description content">
                            <div className="audio-title content-description">
                                {currentAudio.title}
                            </div>
                            <div className="audio-artist content-description">
                                {currentAudio.artist}
                            </div>
                        </div>
                        <div className="audio-duration content">
                            04:54
                        </div>
                    </div>
                    <div className="audio-group-action">
                        <div className="action">
                            <ActionIcon lineHeight="48px">
                                <HeartOutlined/>
                            </ActionIcon>
                        </div>
                        <div className="action">
                            <ActionIcon lineHeight="48px">
                                <EllipsisOutlined/>
                            </ActionIcon>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlaylistAudio;