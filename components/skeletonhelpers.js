import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (this.props.pad ? <div className="container pad">{this.props.children}</div> : <div className="container">{this.props.children}</div>)
  }
}

Container.defaultProps = {
  pad: false
}

class Row extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (this.props.pad ? <div className="row u-full-width bio pad">{this.props.children}</div> : <div className="row u-full-width bio">{this.props.children}</div>)
  }
}

Row.defaultProps = {
  pad: false
}

class Column extends Component {
  constructor(props) {
    super(props)
  }
  defineWidth = () => {
    return this.props.width + (this.props.center ? ' columns u-full-width bio' : ' columns u-full-width')
  }
  render() {
    return  <div className={this.defineWidth()} style={this.props.center ? {} : {textAlign: 'left', paddingTop: 0.25 + 'em'}}>{this.props.children}</div>
  }
}

Column.defaultProps = {
  center: true
}

export { Container, Row, Column }
