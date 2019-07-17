// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component{

    logCoordinate = (ev) => {
        const y = ev.clientY
        const x = ev.clientX
        this.props.onReceiveCoordinates([x,y])
    }

    render(){
        console.log(this.props)
        return(
            <button onClick={this.logCoordinate}>Coordinates</button>
        )
    }

}