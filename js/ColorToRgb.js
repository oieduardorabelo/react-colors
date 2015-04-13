'use strict'

import React from 'react'

class ColorToRgb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>rgb({this.props.red}, {this.props.green}, {this.props.blue})</h1>
    )
  }
}

export default ColorToRgb
