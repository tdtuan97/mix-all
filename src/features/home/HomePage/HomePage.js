import React, {Component} from "react";
import Header from "../../../components/layout/Header";
import {Link} from "react-router-dom";

class HomePage extends Component{
    render() {
        return (
            <div className="home-welcome-page">
                <Header/>
                <div className="app-intro">
                    <ul>
                        <li>
                            Login page:&nbsp;
                            <Link to="/login">/login</Link>
                        </li>
                        <li>
                            To see examples, access:&nbsp;
                            <Link to="/examples">/examples</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HomePage