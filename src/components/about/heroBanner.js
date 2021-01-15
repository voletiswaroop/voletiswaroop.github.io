import React, { Component } from 'react'
import SwaroopVoleti from '../../assets/swaroop-voleti-img.png'
import Resume from '../../assets/senior-web-designer.pdf'

export default class heroBanner extends Component {
  render() {
    return (
      <div className="banner-wrapper container">
        <div className="left-aligned">
          <h1 className="title"><span>Hi!</span><br />I'm Swaroo<span>&lt;</span><i className="blink">|&gt;</i>, <br /> Nice to meet you <i className="fas fa-hands-helping"></i></h1>
          <p>I write robust code to convert your <i>great ideas &amp; amazing designs</i> into <i>reality</i>.</p>
          <ul className="follow-section">
            <li><a href="https://www.linkedin.com/in/voletiswaroop/" target="_blank" rel="noopener noreferrer" title="LinkedIn profile"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/voletiswaroop" target="_blank" rel="noopener noreferrer" title="github profile"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="https://www.npmjs.com/~swaroop.voleti" target="_blank" rel="noopener noreferrer" title="NPM package"><i className="fab fa-npm"></i></a></li>
            <li><a href={Resume} download title="Download resume" target="_blank"><i className="fa fa-download left"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:voleti.swaroop@gmail.com" title="contact me"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <img src={SwaroopVoleti} alt="Swaroop voleti" />
      </div>
    )
  }
}
