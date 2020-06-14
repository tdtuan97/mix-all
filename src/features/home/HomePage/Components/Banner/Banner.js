import React, {Component} from "react";
import {Button} from "antd";

class Banner extends Component{
    render() {
        let bannerBackground = require("../../../../../images/banner_background.jpg");
        let bannerTitle = require("../../../../../images/banner_title.png");
        return (
            <div className="home-banner" style={{ backgroundImage: `url(${bannerBackground})` }}>
                <div className="banner-content-wrapper">
                    <div className="banner-title">
                        <img src={bannerTitle} alt=""/>
                    </div>
                    <div className="banner-content">
                        <span>一个高效的页面动画解决方案</span>
                    </div>
                    <Button className="banner-button">
                        Learn More
                    </Button>
                </div>
            </div>
        );
    }
}

export default Banner