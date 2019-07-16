// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleOnClick = (e) => {
    const coordArray = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coordArray);
  }

  render (){
    return (

      <button type="button" onClick={this.handleOnClick}>Coordinates</button>

    )
  }

}

// export to index.js
export default CoordinatesButton;
