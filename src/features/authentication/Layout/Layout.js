import React, {Component} from "react";
import Header from './Component/Header'
import Footer from './Component/Footer'

class Layout extends Component{

    render() {
        return (
            <div className="authentication-layout">
                <Header/>
                <div className="authentication-page-container">{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default Layout