import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {LogoSpin} from "../../common/LogoSpin";
import {connect} from 'react-redux';

class Header extends Component {

    render() {
        let {router} = this.props;
        let {pathname} = router.location;
        let classHeader = this.props.transparent !== true ? "header" : "header transparent";
        return (
            <header
                className={classHeader}>
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

Header.propTypes = {
    transparent: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        router: state.router,
        music: state.music
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
