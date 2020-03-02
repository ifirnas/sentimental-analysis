import React, { Component } from "react";
import './Smiley.scss';
import { FaSmile } from 'react-icons/fa';

export interface SmileyProps {
    onPress: () => void;
    applyClass?: string;
}

class Smiley extends Component<SmileyProps> {

    render() {
        
        const { applyClass, onPress } = this.props;

        return ( 
            <div className={`smiley ${applyClass}`} onClick={onPress}>
                <div className="smiley-icon rotating">
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