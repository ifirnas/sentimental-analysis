import React, { Component } from "react";
import './Icon.scss';

export interface IconProps {
    name: any;
}

class Icon extends Component<IconProps> {

    render() {
        return ( 
            <div className="Icon">
                {this.props.name}
            </div>
        );
    }
}

export default Icon;