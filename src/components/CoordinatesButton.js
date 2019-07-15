// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  logCoordinates = event => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x, y]);
  }

  render() {
    console.log(this.props)
    return (
      <button onClick={this.logCoordinates}>
        Coordinates
      </button>
    )
  }
}
