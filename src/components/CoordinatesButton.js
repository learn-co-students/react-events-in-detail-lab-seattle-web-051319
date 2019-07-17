// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component{
    handleOnClick = (event) => {
        const Array = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(Array)
    }
    render(){
        return(
            <button onClick={this.handleOnClick}>hi</button>

        )
    }
}
export default CoordinatesButton;
