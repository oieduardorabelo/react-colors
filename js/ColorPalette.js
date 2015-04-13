'use strict'

import React from 'react'

class ColorToRgb extends React.Component {
  constructor(props) {
    super(props)
  }

  getBgMix() {
    let rgb = `rgb(${this.props.red}, ${this.props.green}, ${this.props.blue})`

    return {
      backgroundColor: rgb
    }
  }

  getBgRed() {
    let r = `rgb(${this.props.red}, 0, 0)`

    return {
      backgroundColor: r
    }
  }

  getBgGreen() {
    let g = `rgb(0,${this.props.green}, 0)`

    return {
      backgroundColor: g
    }
  }

  getBgBlue() {
    let b = `rgb(0,0,${this.props.blue})`

    return {
      backgroundColor: b
    }
  }

  render() {
    return (
      <div className="color-palette">
        <div className="bg bg-mix" style={this.getBgMix()}></div>
        <div className="bg bg-parts bg-r" style={this.getBgRed()}></div>
        <div className="bg bg-parts bg-g" style={this.getBgGreen()}></div>
        <div className="bg bg-parts bg-b" style={this.getBgBlue()}></div>
      </div>
    )
  }
}

export default ColorToRgb
