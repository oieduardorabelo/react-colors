'use strict'

import React from 'react'
import ColorSlider from './ColorSlider'

class Colors extends React.Component {

  constructor() {
    super();
    this.state = {
      red: 50,
      green: 50,
      blue: 50
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
    var bgMix = {
      backgroundColor: `rgb(${this.state.red} ,${this.state.green} ,${this.state.blue})`
    }
    var bgR = {
      backgroundColor: `rgb(${this.state.red} ,0,0)`
    }
    var bgG = {
      backgroundColor: `rgb(0,${this.state.green} ,0)`
    }
    var bgB = {
      backgroundColor: `rgb(0,0,${this.state.blue})`
    }
    return (
      <div>
        <ColorSlider ref="red" initialValue={this.state.red} update={this.update.bind(this)} />
        <ColorSlider ref="green" initialValue={this.state.green} update={this.update.bind(this)} />
        <ColorSlider ref="blue" initialValue={this.state.blue} update={this.update.bind(this)} />

        <div className="bg bg-mix" style={bgMix}></div>
        <div className="bg bg-parts bg-r" style={bgR}></div>
        <div className="bg bg-parts bg-g" style={bgG}></div>
        <div className="bg bg-parts bg-b" style={bgB}></div>
      </div>
    )
  }
}


export default Colors
