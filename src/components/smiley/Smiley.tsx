import React, { Component } from "react";
import './Smiley.scss';
import { FaSmile } from 'react-icons/fa';

export interface SmileyProps {
    onPress: () => void;
    applyClass?: string;
}

class Smiley extends Component<SmileyProps> {

    render() {
        return ( 
            <div className={`smiley ${this.props.applyClass}`} onClick={this.props.onPress}>
                <div className="smiley-icon">
                    <FaSmile />
                </div>
                <div className="smiley-text fadeInRight">
                    Help us improve
                </div>
            </div>
        );
    }
}

export default Smiley;