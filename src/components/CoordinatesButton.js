// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
    constructor(props){
        super(props) 
    }

    clickMe = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render(){
        return(
                <button onClick={this.clickMe} >Button</button>
        )
    }
}

export default CoordinatesButton