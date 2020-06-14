import React, {Component} from "react";

import HomePage from "./HomePage";
import {connect} from "react-redux";

class Container extends Component {
    render() {
        let arrayAudio = [
            {
                id: 1,
                title: 'Đêm Trăng Tình Yêu',
                artist: 'Thanh Goll',
                url: '/',
            },
            {
                id: 2,
                title: 'Tình Yêu Mang Theo',
                artist: 'Thanh Goll',
                url: '/',
            },
            {
                id: 3,
                title: 'Cánh Chim Hải Âu',
                artist: 'Thanh Goll',
                url: '/',
            }
        ];

        return (
            <HomePage
                {...this.props}
                arrayAudio={arrayAudio}
            />
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)