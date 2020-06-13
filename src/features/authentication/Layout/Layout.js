import React, {Component} from "react";
import './style.scss'
import {Row, Col} from "antd";

class Layout extends Component {

    render() {
        return (
            <div className="authentication-layout">
                <Row justify="center">
                    <Col xs={16} md={12} xxl={8}>
                        <div className="authentication-page-container">{this.props.children}</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Layout