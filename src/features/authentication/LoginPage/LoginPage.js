import React, {Component} from "react";
import Logo from "../../../component/common/Logo";
import CommonCard from "../../../component/common/CommonCard";
import './style.scss';
import CommonInput from "../../../component/common/Form/CommonInput";

class LoginPage extends Component{
    render() {
        return (
            <div className="login-page">
                <div className="login-content">
                    <CommonCard>
                        <div className="form-logo form-component">
                            <Logo/>
                        </div>
                        <div className="form-title form-component">
                            Login
                        </div>
                        <div className="form-login form-component">
                            <form className="form-field">
                                <div className="form-item">
                                    <div className="item-icon">
                                        <CommonInput/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </CommonCard>
                </div>
            </div>
        );
    }
}

export default LoginPage