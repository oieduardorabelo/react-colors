'use strict'

import React from 'react'

class ColorToHex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentToHex(c) {
      let hex = Number(c).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(r) + this.componentToHex(b);
  }

  render() {
    return (
      <h1>{this.rgbToHex(this.props.red, this.props.green, this.props.blue)}</h1>
    )
  }
}

export default ColorToHex
