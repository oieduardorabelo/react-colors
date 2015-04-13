'use strict'

import React from 'react'
import ColorSlider from './ColorSlider'
import LabelColorToHex from './ColorToHex'
import LabelColorToRgb from './ColorToRgb'
import ColorPalette from './ColorPalette'

class Colors extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      red: this.props.initialValue,
      green: this.props.initialValue,
      blue: this.props.initialValue
    }
  }

  update() {
    this.setState({
      red: this.refs.red.refs.colorSlider.getDOMNode().value,
      green: this.refs.green.refs.colorSlider.getDOMNode().value,
      blue: this.refs.blue.refs.colorSlider.getDOMNode().value
    })
  }

  render() {
    return (
      <div>
        <ColorSlider ref="red" initialValue={this.state.red} update={this.update.bind(this)} />
        <ColorSlider ref="green" initialValue={this.state.green} update={this.update.bind(this)} />
        <ColorSlider ref="blue" initialValue={this.state.blue} update={this.update.bind(this)} />

        <LabelColorToRgb red={this.state.red} green={this.state.green} blue={this.state.blue} />
        <LabelColorToHex red={this.state.red} green={this.state.green} blue={this.state.blue} />

        <ColorPalette red={this.state.red} green={this.state.green} blue={this.state.blue} />
      </div>
    )
  }
}


export default Colors
