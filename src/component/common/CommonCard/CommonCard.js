import React, {Component} from 'react';
import './style.scss';

class CommonCard extends Component {
    render() {
        return (
            <div className="cm-card cm-box-shadow">
                <div className="cm-card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CommonCard;
