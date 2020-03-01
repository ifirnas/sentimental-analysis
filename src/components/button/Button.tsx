import React, { Component } from "react";
import './Button.scss';

export interface CardProps {
    text: string;
    onSend: () => void;
    disabled: boolean;
}

class Button extends Component<CardProps> {

    render() {
        return (
            <div className="Button">
                <button onClick={this.props.onSend} disabled={this.props.disabled}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;