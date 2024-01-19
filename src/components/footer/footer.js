import React, { Component } from 'react'
import './footer.css'
import Resume from '../../assets/swaroop-senior-web-developer.pdf'

export default class footer extends Component {

  render() {
    return (
      <>
        {/* <p className="notification">Note* all the animations and themes (Day &amp; Night) were built using only <strong>CSS</strong>, Yes you heard it right it just C S S...</p> */}
        <footer className="footer-wrapper">
          <span className="left-section">&copy; 2014 - {new Date().getFullYear()} Swaroop Gupta Voleti</span>
          <ul className="right-section">
            <li><a href="https://www.linkedin.com/in/voletiswaroop/" target="_blank" rel="noopener noreferrer" title="LinkedIn profile"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/voletiswaroop" target="_blank" rel="noopener noreferrer" title="github profile"><i className="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="https://www.npmjs.com/~swaroop.voleti" target="_blank" rel="noopener noreferrer" title="github profile"><i className="fab fa-npm"></i></a></li>
            {/* <li><a href={Resume} download title="Download resume" rel="noopener noreferrer" target="_blank"><i className="fa fa-download left"></i></a></li> */}
            <li><a href='http://voletiswaroop.github.io/resume' title="Download resume" rel="noopener noreferrer" target="_blank"><i className="fa fa-download left"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fvoletiswaroop.github.io%2F&tab=desktop" title="Pagespeed"><i className="fas fa-tachometer-alt"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fvoletiswaroop.github.io%2F" title="W3C Website check"><i className="far fa-file-code"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:voleti.swaroop@gmail.com" title="contact me"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
          </ul>
        </footer>
      </>
    )
  }
}
