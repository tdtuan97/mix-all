import React, {Component} from 'react';
import './style.scss';
import {Input} from "antd";

class CommonInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Input placeholder="Basic usage"
                {...this.props}
            />
        )
    }
}

export default CommonInput;
