import React, { Component } from 'react'
import './recognitions.css'

export default class recognitions extends Component {

  toggleRubixsAnimation(e) {
    e.currentTarget.closest('.recoginitions-wrapper').classList.toggle("rubixs-view");
    e.currentTarget.closest('.recoginitions-wrapper').classList.toggle("default-view");
  }
  render() {
    return (
      <section className="recoginitions-wrapper rubixs-view" id="recognitions">
        <div className="toggle-view-btns" onClick={(e) => this.toggleRubixsAnimation(e)}>
          <span>3D</span>
          <span>2D</span>
        </div>
        <div className="container">
          <h3><i className="fas fa-award"></i>Awards &amp; Recognitions</h3>
          <div className="cube-wrapper">
            <ul className="recoginitions-list">
              <li className="front">
                <p><i className="fa fa-circle"></i>Athenahealth</p>
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received Extra mile award twice</div>
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Hackathon runner up</div>
              </li>
              <li className="left"><p><i className="fa fa-circle"></i>Bankbazaar.com</p>
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received award of appreciation the year</div>
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Hackathon winner </div>
              </li>
              <li className="right"><p><i className="fa fa-circle"></i>Innoswift Solutions</p>
                <div><i className="fa fa-ellipsis-h" aria-hidden="true"></i>Received extra increment as recognition award for the best performance</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
