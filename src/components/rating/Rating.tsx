import React, { Component } from "react";
import './Rating.scss';
import Card from "../card/Card";
import TellMore from "../tell-more/TellMore";
import { FaSmile } from "react-icons/fa";
import Icon from "../icon/Icon";

export interface RatingProps {
    applyClass?: string;
    onClose: () => void;
}

class Rating extends Component<RatingProps> {

    state = {
        isRated: false,
        showMore: false,
        initClass: 'initTellMore',
        isSubmitted: false
    }

    createNumber = () => {
        let numbers = [];

        for (let i: number = 1; i <= 6; i++) {
            numbers.push(<span key={i} onClick={() => this.handleRatingPress()}>{i}</span>)
        }

        return numbers;
    }

    handleRatingPress = () => {
        this.setState({isRated: true}, () => {
            setTimeout(() => {
                this.setState({showMore: true})
            }, 1000)
            
            setTimeout(() => {
                this.setState({initClass: 'animateTellMore'})
            }, 1001)
        })

    }

    handleSubmit = (isSubmitted: boolean) => {
        this.setState({isSubmitted})
    }

    resetForm = () => {
        this.setState({
            isRated: false,
            showMore: false,
            initClass: 'initTellMore',
            isSubmitted: false
        })
        this.props.onClose();
    }

    render() {
        const {showMore, isRated, isSubmitted} = this.state;

        return ( 
            <Card title={showMore && !isSubmitted ? 'Tell us more' : ''} onClose={this.resetForm} classes={`init-ratings ${this.props.applyClass}`}>
                {
                    showMore ? 
                        !isSubmitted ? 
                            <TellMore onSubmitted={this.handleSubmit} applyClass={this.state.initClass} /> 
                        : 
                            <div className="initTellMore animateOut">
                                <h4>Thank you!</h4>
                                <p>Your feedback is valuable to us.</p>
                            </div>
                    :
                    <div className="ratings">
                        {
                            isRated ?
                            <h4 className="done">
                                <span><Icon name={<FaSmile />} /></span>
                                <span>Thank you! Tell us more.</span>                             
                            </h4>
                            :
                            <React.Fragment>
                                <h4>Rate your experience</h4>
                                <div className="numbers">
                                    {this.createNumber()}
                                </div>
                                <div className="hint">
                                    <span>Not Satisfied</span>
                                    <span>Very Satisfied</span>
                                </div>
                            </React.Fragment>
                        }
                        

                    </div>
                }
            </Card>
        );
    }
}

export default Rating;