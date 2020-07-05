import React, {Component} from "react";
import _ from "lodash";

class ActionIcon extends Component {

    sizeIcon = () => {
        let fontSize = !_.isEmpty(this.props.sizeIcon) ? this.props.sizeIcon : "24px";
        let lineHeight = !_.isEmpty(this.props.lineHeight) ? this.props.lineHeight : "24px";
        return {
            "font-size": fontSize,
            "line-height": lineHeight,
        }
    }

    render() {
        return (
            <div className="action-icon" style={this.sizeIcon()}>
                {this.props.children}
            </div>
        );
    }
}

export default ActionIcon