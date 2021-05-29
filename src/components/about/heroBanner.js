import React, { Component } from 'react'
import SwaroopVoleti from '../../assets/swaroop.jpg'

export default class heroBanner extends Component {
  render() {
    const experience = ((new Date() - new Date('2012-01-25').getTime()) / 3.15576e+10).toFixed(1)
    return (
      <div className="banner-wrapper container">
        <div className="left-aligned">
          <h1 className="title"><span>Hi, I'm</span> <br />Frontend Developer</h1>
          <p>I write robust code to convert your <i>great ideas &amp; designs</i> into <i>reality</i>.</p>
          <div className="counter-item-wrapper">
            <div className="counter-item">
              <span className="count">35+</span>
              <span className="counter-title">Projects Completed</span>
            </div>
            <div className="counter-item">
              <span className="count">{experience}</span>
              <span className="counter-title">Years of Experience</span>
            </div>
            <div className="counter-item">
              <span className="count">5</span>
              <span className="counter-title">Awards</span>
            </div>

          </div>
        </div>
        <div className="author-img">
          <img src={SwaroopVoleti} alt="Swaroop voleti" title="Swaroop voleti" width="377" />
        </div>
      </div>
    )
  }
}
