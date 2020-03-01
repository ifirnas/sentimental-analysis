import React, { Component } from "react";
import './TellMore.scss';
import Input from "../Input/Input";
import Button from "../button/Button";

export interface TellMoreProps {
    applyClass?: string;
    onSubmitted: (status: boolean) => any;
}

class TellMore extends Component<TellMoreProps> {

    state = {
        most: '',
        least: '',
        email: '',
        submitted: false
    }

    handleSubmit = () => {
        this.setState({submitted: true}, () => {
            this.props.onSubmitted(this.state.submitted)
        });        
    }

    handleInput = (e: any) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        const { most, least, email } = this.state;
        return (             
            <div className={this.props.applyClass}>
                <Input placeholder="Tell us your experience (Optional)" 
                       type="text"
                       label="What did you like most?"
                       isLarge={true}
                       inputClass="custom-input"
                       name="most"
                       value={this.state.most}
                       handleInput={this.handleInput}
                />             

                <Input placeholder="Let us know how we can improve (Optional)" 
                       type="text"
                       label="What did you like least?"
                       isLarge={true}
                       name="least"
                       inputClass="custom-input"
                       value={this.state.least}
                       handleInput={this.handleInput}
                />              

                <Input placeholder="Your email address (Optional)" 
                       type="text"
                       label="Your email"       
                       name="email"                
                       inputClass="custom-input"
                       value={this.state.email}
                       handleInput={this.handleInput}
                />      
                
                <Button text="Submit" 
                        onSend={this.handleSubmit}
                        disabled={most || least || email ? false : true}
                />  
            </div>                
        );
    }
}

export default TellMore;