import React, { Component } from 'react'
import SwaroopVoleti from '../../assets/swaroop-voleti-img.png'

export default class heroBanner extends Component {
  render() {
    const experience = ((new Date() - new Date('2012-01-25').getTime()) / 3.15576e+10).toFixed(1)
    return (
      <div className="banner-wrapper container">
        <div className="left-aligned">
          <h1 className="title"><span>Hi!</span> I'm Swaroo<span>&lt;</span><i className="blink">|&gt;</i>, <br /> Nice to meet you <i className="fas fa-hands-helping"></i></h1>
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
        <img src={SwaroopVoleti} loading="lazy" alt="Swaroop voleti" />
      </div>
    )
  }
}
