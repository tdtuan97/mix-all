import React, {Component} from "react";
import {Header} from "../../../components/layout/Header";
import {Banner} from "./Components";

import './style.scss'

class HomePage extends Component{
    render() {
        return (
            <div className="home-welcome-page">
                <Header transparent={true}/>
                <Banner/>
            </div>
        );
    }
}

export default HomePage