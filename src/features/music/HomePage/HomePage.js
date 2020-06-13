import React, {Component} from "react";
import PropTypes from 'prop-types';

import './style.scss';
import {Card} from "antd";
import {
    FastBackwardOutlined,
    BackwardOutlined,
    PlayCircleOutlined,
    ForwardOutlined,
    FastForwardOutlined,
} from "@ant-design/icons";

class HomePage extends Component {


    render() {
        let {currentFile, arrayFile} = this.props;
        let imagePlayer = require("../images/player.png");
        return (
            <div className="music-home">
                <Card className="music-player-wrapper">
                    <div className="player-image-component player-component">
                        <img className="player-image" src={imagePlayer} alt="player"/>
                    </div>
                    <div className="player-description player-component">
                        <div className="player-title description">
                            {currentFile.title}
                        </div>
                        <div className="player-artist description">
                            {currentFile.artist}
                        </div>
                    </div>
                    <div className="player-controller player-component">
                        <div className="controller-action">
                            <FastBackwardOutlined className="action-icon"/>
                        </div>
                        <div className="controller-action">
                            <BackwardOutlined className="action-icon"/>
                        </div>
                        <div className="controller-action">
                            <PlayCircleOutlined className="action-icon"/>
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

HomePage.propTypes = {
    arrayFile: PropTypes.array,
    currentFile: PropTypes.object,
};

export default HomePage