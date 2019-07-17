// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    clickMe = (event) => {
        event.persist()
        setTimeout( () => {this.props.onDelayedClick(event) } ,this.props.delay) ;
        // console.log("Delayed");
    }

    render() {
        return (
            <button onClick={this.clickMe}>Delayed Button</button>
        )
    }
}

export default DelayedButton