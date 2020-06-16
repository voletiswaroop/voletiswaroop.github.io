import React, { Component } from 'react'
import './announcements.css'

export default class announcements extends Component {
  render() {
    return (
      <section className="announcements-wrapper">
        <div className="container">
          <i className="fas fa-exclamation-triangle"></i><a href="https://voletiswaroop.github.io/covid19" target="_blank">Find here day to day statistics of COVID19 pandemic in India</a>
        </div>
      </section>
    )
  }
}
