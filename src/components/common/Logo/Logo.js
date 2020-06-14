import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <img src={require("../../../images/logo.png")} className="common-logo" alt="logo"/>
        )
    }
}

export default Logo;
