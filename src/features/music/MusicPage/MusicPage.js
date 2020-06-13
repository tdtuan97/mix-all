import React, {Component} from "react";
import {Header} from "../../../components/layout/Header";

import './style.scss'

class MusicPage extends Component{
    render() {
        let musicBackground = require("../images/background.jpg");
        return (
            <div className="music-page" style={{ backgroundImage: `url(${musicBackground})` }}>
                <Header/>
            </div>
        );
    }
}

export default MusicPage