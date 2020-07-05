import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
} from 'antd';
import { PlaylistAudio } from './components/PlaylistAudio';

class Playlist extends Component {

    render() {
        return (
            <div className="playlist-presentational">
                <Card className="playlist-wrapper">
                    <div className="playlist-title">
                        Playing
                    </div>
                    <div className="playlist-list">
                        <PlaylistAudio/>
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