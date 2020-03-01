import React, { Component } from "react";
import Smiley from "../../components/smiley/Smiley";
import Rating from "../../components/rating/Rating";
import './SmileyPage.scss';

class SmileyPage extends Component {

    state = {
        smileyClass: '',
        ratingClass: '',
    }

    handleSmileyPress = () => {
        this.setState({smileyClass: 'hide', ratingClass: 'showModule'})
    }

    returnSmiley = () => {
        this.setState({ratingClass: '', smileyClass: ''})
    }

    render() {
        return (
            <div className="Smiley-page">
                <Smiley applyClass={this.state.smileyClass} 
                        onPress={this.handleSmileyPress}
                />
                <Rating applyClass={this.state.ratingClass} 
                        onClose={this.returnSmiley}
                />
            </div>
        );
    }
}

export default SmileyPage;