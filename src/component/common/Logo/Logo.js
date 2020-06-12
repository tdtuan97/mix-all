import React, {Component} from 'react';
import './style.scss';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: undefined,
        };
    }

    render() {
        return (
            <img src={require("../../../images/rekit-react.png")} className="common-logo" alt="logo"/>
        )
    }
}

export default Logo;
