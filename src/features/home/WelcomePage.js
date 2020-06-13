import React from "react";
import {Link} from "react-router-dom";
import Header from "../../component/Header";

export default function WelcomePage() {
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
