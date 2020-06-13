import React, {Component} from 'react';
import './style.scss';

class LogoSpin extends Component {
    render() {
        return (
            <img src={require("../../../images/logo.png")} className="common-logo-spin" alt="logo"/>
        )
    }
}

export default LogoSpin;
