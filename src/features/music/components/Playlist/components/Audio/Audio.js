import React, { Component } from 'react';
import {
    HeartOutlined,
    EllipsisOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { ActionIcon } from '../../../ActionIcon';

class Audio extends Component {

    render() {
        let { audio } = this.props;
        let { handleSelectAudio } = this.props;
        let imagePlayer = require('../../../../images/player.png');
        return (
            <div className="playlist-audio-president">
                <div className="playlist-audio">
                    <div className="audio-group-content">
                        <div className="audio-number content">
                            {this.props.index + 1}
                        </div>
                        <div className="audio-image content">
                            <img className="audio-image-tag" src={imagePlayer} alt=""/>
                        </div>
                        <div className="audio-description content">
                           <Button type="text"
                                    className="audio-title content-description"
                                    onClick={handleSelectAudio}
                            >
                                {audio.title}
                            </Button>

                            <div className="audio-artist content-description">
                                {audio.artist}
                            </div>
                        </div>
                        <div className="audio-duration content">
                            {audio.duration}
                        </div>
                    </div>
                    <div className="audio-group-action">
                        <div className="action">
                            <ActionIcon lineHeight="54px">
                                <HeartOutlined/>
                            </ActionIcon>
                        </div>
                        <div className="action">
                            <ActionIcon lineHeight="54px">
                                <EllipsisOutlined/>
                            </ActionIcon>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Audio;