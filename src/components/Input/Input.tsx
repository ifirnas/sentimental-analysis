import React, { Component } from "react";
import './Input.scss';

export interface InputProps {
    isLarge?: boolean;
    label?: string;
    placeholder: string;    
    type?: any;
    inputClass?: string;
    value: any;
    handleInput: (e: any) => any;
    name: string;
}

class Input extends Component<InputProps> {

    render() {

        const {label, type, isLarge, placeholder, inputClass, value, handleInput, name} = this.props;

        return ( 
            <div className="Input">
                {label ? 
                    <label>{label}</label> : ''
                }
                {
                    isLarge ?
                        <textarea placeholder={placeholder}    
                                  className={inputClass}   
                                  value={value}  
                                  name={name}
                                  onChange={handleInput.bind(this)}                  
                        />
                    : 
                        <input type={type}
                               placeholder={placeholder}
                               className={inputClass}
                               name={name}
                               value={value}
                               onChange={handleInput.bind(this)}                                 
                        />
                }
                
            </div>
        );
    }
}

export default Input;