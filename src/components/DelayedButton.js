// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {

  onClickHandler = event => {
    event.persist()
    setTimeout( () => {this.props.onDelayedClick(event);}, this.props.delay)
  }

  render () {
    return (

      <button type="button" onClick={(event)  => this.onClickHandler(event)}>Delay</button>
    )
  }
}

// export to index.js
export default DelayedButton;
