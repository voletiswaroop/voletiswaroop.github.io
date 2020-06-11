import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  scrollTop() {
    window.scrollTo(0, 0)
  }
  subnavigation(e) {
    if (e.currentTarget.closest('.header-wrapper').classList.contains('show-subnav')) {
      e.currentTarget.closest('.header-wrapper').classList.remove('show-subnav')
    } else {
      e.currentTarget.closest('.header-wrapper').classList.add('show-subnav')
    }
  }
  render() {
    return (
      <header className="header-wrapper">
        <span className="logo" onClick={() => this.scrollTop()}>
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 119 90" className="iconLeft" width="50">
            <g transform="matrix(3.9130434782608696,0,0,3.9130434782608696,0.30434782608695343,-11.73913043478261)" stroke="none"
              fill="#2086c6">
              <g>
                <path
                  d="M24 5v-.917L22.857 3H1.143L0 4.083v16.834L1.143 22H9.75L9 25H7v1h6.69l-.69-.653V25h-2.96l.75-3H13v-1H1.5l-.5-.5v-16l.5-.5h21l.5.5V5h1zM13 18H1v-1h12v1zm-1 .5l.866.5v1l-.866.5-.866-.5v-1l.866-.5z">
                </path>
                <path
                  d="M19 22h-4V9h12v1h1V7.083L26.857 6H15.143L14 7.083v17.834L15.143 26H19.8l-.8-.8V25h-3.5l-.5-.5V23h4v-1zM15 8v-.5l.5-.5h11l.5.5V8H15z">
                </path>
                <path
                  d="M21 14v8h8v-8h-8zm0-1v-.5l.5-.5h7l.5.5v.5h-8zm0 10v1.5l.5.5h7l.5-.5V23h-8zm-1-10.917L21.143 11h7.714L30 12.083v12.834L28.857 26h-7.714L20 24.917V12.083zm5 11.167l.65.375v.75l-.65.375-.65-.375v-.75l.65-.375z">
                </path>
              </g>
            </g>
          </svg>
          <p>Swaroop Voleti</p>
        </span>
        <div className="navlines" onClick={(e) => this.subnavigation(e)}> <span></span><span></span><span></span></div>
        <nav className="navigation">
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#recognitions">Recognitions</a></li>
          </ul>
        </nav>
        <p className="scrollTop" onClick={() => this.scrollTop()}><i className="fa fa-angle-double-up" aria-hidden="true"></i></p>
      </header>
    )
  }
}
