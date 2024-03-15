import React, { Component } from 'react';
import { Container, Row, Column } from '../components/skeletonhelpers.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import aaImage from '../images/aalogo.png'
import Image from 'next/image'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

  // Generates my name within individual span elements for easter egg
  eggGenerator = () => {
    let output = "Eden Simmons".split("").map((value, index) =>
      <span key={index}>{value}</span>
    );
    return output;
  }

  render() {
    return  <div className="footer u-full-width pad pad-bottom">
              <Container>
                <Row>
                  <Column width='four'>
                    <p>
                      <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en_US" title="Creative Commons BY-SA">
                        <FontAwesomeIcon icon={ faCreativeCommons } />
                      </a><br />
                      2006 - {new Date().getFullYear()}
                    </p>
                  </Column>
                  <Column width='four'>
                    <Row>
                      <p>
                        <div className="egg">
                          {this.eggGenerator()}
                        </div>
                        <div style={{padding: '0.3em'}} />
                          <a href='https://www.auralalliance.page/'>
                            <Image className="showcenter" src={aaImage} width={72} height={32} objectFit='contain' alt="Aural Alliance" placeholder='blur' /><br />
                          </a>
                      </p>
                    </Row>
                    <Row>
                      
                    </Row>
                  </Column>
                  <Column width='four'>
                    <p>
                      <FontAwesomeIcon icon={ faEnvelope } /><br />
                      Booking: <span id="email">laicos.fiesle@tmgm</span><br />
                      Others: <span id="email">laicos.fiesle@nede</span>
                    </p>
                  </Column>
                </Row>
              </Container>
            </div>
  }
}

export default Footer
