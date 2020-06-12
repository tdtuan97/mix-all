import React, {Component} from "react";
import Logo from "../../../component/common/Logo";

class LoginPage extends Component{
    render() {
        return (
            <div className="login-page">
                <div className="login-content">
                    <div className="common-card">
                        <div className="card-body">
                            <div className="form-logo">
                                <Logo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage