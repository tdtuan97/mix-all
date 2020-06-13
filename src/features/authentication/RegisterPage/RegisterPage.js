import React, {Component} from "react";
import Logo from "../../../component/common/Logo";
import {Link} from "react-router-dom";

import {Input, Button, Card, Form} from 'antd';

class RegisterPage extends Component {
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
                        Register
                    </div>
                </div>
                <Form className="form-login form-block">
                    <Form.Item
                        name="full_name"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Full name"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item
                        name="username"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="Password"
                        validateStatus={hasError ? "error" : ""}
                        help={hasError ? "Message error" : null}
                    >
                        <Input placeholder="Password"/>
                    </Form.Item>

                </Form>

                <Button
                    onClick={this.handleSubmit}
                    type="primary"
                    htmlType="submit"
                    className="form-action"
                    block
                >
                    Register
                </Button>
                <div className="form-other">
                    <Link to={'/login'}>Login</Link>
                </div>
            </Card>
        );
    }
}

export default RegisterPage