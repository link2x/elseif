import React, { Component } from 'react';
import Image from 'next/image'
import { Row } from '../components/skeletonhelpers.js'
import logoImage from '../images/ELSEIFDraft.png'

class Logo extends Component {
  render() {
    return  <div className="twelve columns showcenter u-max-full-width" style={{marginTop: '1.75em', marginBottom: '2em'}}>
              <Image className="resize_fit_center showcenter" src={logoImage} width={882} height={216} layout='responsive' objectFit='contain' alt="Logo" placeholder='blur' />
            </div>
  }
}

class Header extends Component {
  render() {
    return  <Row pad>
              <Logo />
              <div className="twelve columns bio pad">
                <h2>
                  Hi, there!
                </h2>
                <p>
                  I&apos;m ELSEIF!<br />
                  I&apos;m an EDM producer.<br />
                  I&apos;ve been making music since 2006.<br />
                </p>
              </div>
            </Row>
  }
}

export default Header
