import React, {Component} from "react";
import {AudioPlayer} from "../../components/AudioPlayer";
import { Playlist } from '../../components/Playlist';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="music-home">
                <Playlist/>
                <AudioPlayer/>
            </div>
        );
    }
}

export default HomePage