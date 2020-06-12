import React, {Component} from "react";
import './style.scss'

class Layout extends Component {

    render() {
        return (
            <div className="authentication-layout">
                <div className="authentication-page-container">{this.props.children}</div>
            </div>
        );
    }
}

export default Layout