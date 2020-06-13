import React, {Component} from "react";

import HomePage from "./HomePage";
import {connect} from "react-redux";
import './style.scss';

class Container extends Component{
    render() {
        let arrayFile = [
            {
                id: 1,
                title: 'Đêm Trăng Tình Yêu',
                artist:'Thanh Goll',
                src: '/',
            },
            {
                id: 2,
                title: 'Tình Yêu Mang Theo',
                artist:'Thanh Goll',
                src: '/',
            },
            {
                id: 3,
                title: 'Cánh Chim Hải Âu',
                artist:'Thanh Goll',
                src: '/',
            }
        ];

        let currentFile = {
            id: 1,
            title: 'Đêm Trăng Tình Yêu',
            artist:'Thanh Goll',
            src: '/',
        }

        return (
            <HomePage arrayFile={arrayFile} currentFile={currentFile}/>
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