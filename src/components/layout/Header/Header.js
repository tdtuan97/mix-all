import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {LogoSpin} from "../../common/LogoSpin";
import {connect} from 'react-redux';

import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {router} = this.props;
        let {pathname} = router.location;

        return (
            <header
                className="header">
                <div className="header-content">
                    <div className="header-logo">
                        <LogoSpin/>
                    </div>
                    <div className="header-menu">
                        <ul className="menu-content">
                            <li className={pathname === '/' ? "menu-item active" : "menu-item"}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className={pathname === '/music' ? "menu-item active" : "menu-item"}>
                                <Link to='/music'>Music</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/'>About</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-menu auth-menu">
                        <ul className="menu-content">
                            <li className="menu-item">
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        router: state.router
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
