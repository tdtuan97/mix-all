import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
} from 'antd';
import { Audio } from './components/Audio';

class Playlist extends Component {

    render() {
        let { listAudio } = this.props;
        return (
            <div className="playlist-presentational">
                <Card className="playlist-wrapper">
                    <div className="playlist-title">
                        Playing
                    </div>
                    <div className="playlist-list">
                       {
                            listAudio.length < 0 ? null
                                : listAudio.map((audio, index) => {
                                    return <Audio key={index} index={index}/>;
                                })
                        }
                    </div>
                </Card>
            </div>
        );
    }
}

Playlist.propTypes = {
    currentAudio: PropTypes.object,
};

export default Playlist;