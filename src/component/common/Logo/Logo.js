import React, {Component} from 'react';
import './style.scss';

class Logo extends Component {
    render() {
        return (
            <img src={require("../../../images/rekit-react.png")} className="common-logo" alt="logo"/>
        )
    }
}

export default Logo;
