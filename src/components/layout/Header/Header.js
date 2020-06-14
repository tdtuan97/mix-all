import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {LogoSpin} from "../../common/LogoSpin";
import {connect} from 'react-redux';

import "./Header.scss";
import {scopeSpotify} from "../../../features/music/redux/actions";

class Header extends Component {
   /* getUrlLoginSpotify = () => {
        let config = {
            client_id: 'e3e5c1773e2d42ba92b05dd84f9c7249',
            client_secret: '1c326c5e080449e2bb296f158ddf4453',
            redirect_uri: 'http://localhost:3000/music',
            show_dialog: true
        }

        let scopes = 'user-modify-playback-state';
        let url = 'https://accounts.spotify.com/authorize' +
            '?response_type=code' +
            '&client_id=' + config.client_id +
            (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
            '&redirect_uri=' + config.redirect_uri;
        return url;
    }*/

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
                           {/* <li className="menu-item">
                                <a target='_blank' href={this.getUrlLoginSpotify()}>Login with
                                    Spotify</a>
                            </li>*/}
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
        scopeSpotify: () => {
            dispatch(scopeSpotify())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
