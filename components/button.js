import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LinkButton extends Component {
  constructor(props) {
    super(props)
  }

  defineWidth = () => {
    return this.props.width + ' columns'
  }

  render() {
    if (!this.props.disabled) return <div className={this.defineWidth()}>
                <a className="button button-primary u-full-width" href={this.props.href}>
                    {this.props.icon? <FontAwesomeIcon icon={this.props.icon} size='2x' style={{paddingTop: 0.25 + 'em'}} /> : null}
                    <span style={{marginLeft: 1 + 'em', position: 'relative', top: this.props.icon? -0.25 + 'em' : 0 + 'em'}}>
                      {this.props.label ? this.props.label : ''}
                    </span>
                </a>
            </div>
      else return <div className={this.defineWidth()}>
      <span className="note-disabled">
      <span className="button disabled u-full-width">
          {this.props.icon? <FontAwesomeIcon icon={this.props.icon} size='2x' style={{paddingTop: 0.25 + 'em'}} /> : null}
          <span style={{marginLeft: 1 + 'em', position: 'relative', top: this.props.icon? -0.25 + 'em' : 0 + 'em'}}>
            {this.props.label ? this.props.label : ''}
          </span>
      </span>
      </span>
  </div>
  }
}

export default LinkButton
