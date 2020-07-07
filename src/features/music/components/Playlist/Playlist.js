import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Audio } from './components/Audio';

class Playlist extends Component {

    render() {
        let { listAudio } = this.props;
        return (
            <div className="playlist-presentational">
                <div className="playlist-wrapper">
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
                </div>
            </div>
        );
    }
}

Playlist.propTypes = {
    currentAudio: PropTypes.object,
};

export default Playlist;