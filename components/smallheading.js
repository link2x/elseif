import React, { Component } from 'react'

class SmallHeading extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return  <div className="row u-full-width bio pad">
              <div className="twelve columns">
                <h5>{this.props.children}</h5>
              </div>
            </div>
  }
}

export default SmallHeading
