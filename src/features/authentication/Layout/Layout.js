import React, {Component} from "react";
import Header from '../../../component/Header';
import './style.scss'

class Layout extends Component {

    render() {
        return (
            <div className="authentication-layout">
                <Header/>
                <div className="authentication-page-container">{this.props.children}</div>
            </div>
        );
    }
}

export default Layout