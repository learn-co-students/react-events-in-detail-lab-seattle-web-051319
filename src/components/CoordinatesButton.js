import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  manageOnClick = (event) => {
    let arr = [event.clientX, event.clientY];
    // console.log(arr)
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={this.manageOnClick}>Here</button>
    )
  }
}
