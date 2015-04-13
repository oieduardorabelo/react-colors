'use strict'

import React from 'react'

class ColorSlider extends React.Component {
  render() {
    return (
      <div>
        <input
          ref="colorSlider" type="range"
          min="0" max="255" step="1"
          value={this.props.initialValue}
          onChange={this.props.update} />
        <label>{this.props.initialValue}</label>
      </div>
    )
  }
}


export default ColorSlider
