import React from 'react';
import {Link} from "react-router-dom";
import "./style.scss";
import LogoSpin from "../common/LogoSpin";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: undefined,
        };
    }

    render() {
        return (
            <header
                className="header">
                <div className="header-content">
                    <div className="header-logo">
                       <LogoSpin/>
                    </div>
                    <div className="header-menu">
                        <ul className="menu-content">
                            <li className="menu-item"><Link to='/'>Home</Link></li>
                            <li className="menu-item"><Link to='/'>Detail</Link></li>
                            <li className="menu-item"><Link to='/'>About</Link></li>
                            <li className="menu-item"><Link to='/'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
