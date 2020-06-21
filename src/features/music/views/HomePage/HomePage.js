import React, {Component} from "react";
import PropTypes from 'prop-types';
import {AudioPlayer} from "../../components/AudioPlayer";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="music-home">
                <AudioPlayer/>
            </div>
        );
    }
}

export default HomePage