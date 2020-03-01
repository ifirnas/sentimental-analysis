import React, { Component } from "react";
import './Card.scss';
import { MdClose } from 'react-icons/md';

export interface CardProps {
    title?: string;        
    children: any;
    classes?: string;
    onClose: () => void;
}

class Card extends Component<CardProps> {

    render() {
        return ( 
            <div className={`Card ${this.props.classes}`}>
                {this.props.title !== '' ? 
                    <div className="Card-header">
                        {this.props.title}
                    </div> : ''
                }                
                <div onClick={this.props.onClose} className={this.props.title ? 'close-icon icon-light' : 'close-icon icon-dark'}>
                    <MdClose />
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Card;