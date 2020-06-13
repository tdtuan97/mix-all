import React, {Component} from "react";
import Logo from "../../../components/common/Logo";
import {Link} from "react-router-dom";

import {Input, Button, Card, Form} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    handleSubmit = () => {
        if (this.state.hasError === true){
            this.setState({
                hasError: false
            })
        }
        else {
            this.setState({
                hasError: true
            })
        }
    }

    render() {
        let {hasError} = this.state;
        return (
            <Card className="card-authentication">
                <div className="form-title form-block">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <div className="title">
                        Login
                    </div>
                </div>
                <Form className="form-login form-block">
                    <Form.Item
                        name="username"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Username" prefix={<UserOutlined/>}/>
                    </Form.Item>
                    <Form.Item
                        name="Password"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Password" prefix={<LockOutlined/>}/>
                    </Form.Item>
                </Form>

                <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    className="form-action"
                    block>
                    Login
                </Button>
                <div className="form-other">
                    <Link to={'/register'}>Register</Link>
                </div>
            </Card>
        );
    }
}

export default LoginPage