import React, { Component, Suspense } from 'react'
import './about.css'
import Swaroop from '../../assets/swaroop-voleti.png'
import HeroBanner from './heroBanner'


export default class about extends Component {
  constructor(props) {
    super(props)
    this.state = {
      herobanner: false
    }
  }
  componentDidMount() {
    this.setState({ herobanner: true })
  }
  render() {
    return (
      <section className="about-wrapper" id="about-me">
        {this.state.herobanner ? <HeroBanner /> : null}
        <div className="container content-visibility">
          <h3 className="user-profile"><img src={Swaroop} alt="Swaroop gupta voleti" />About me</h3>
          <p>I started my journey as a Frontend Developer in 2012. I have extensive experience in building responsive and adaptive user interfaces for web apps catering to a spectrum of devices such as Desktops, Tablets &amp; Mobiles. I have worked on many projects in different sectors such as E-Commerce, Mobile, Banking and Healthcare, all of them are from scratch. I am inquisitive, confident and perpetually working on improving my chops one design problem at a time.</p>
        </div>
        <div className="project-development-process container content-visibility">
          <div className="research">
            <h4><i className="fab fa-searchengin"></i>Research</h4>
            <div>Start understanding the client requirements and break down requirement into multiple small sections and digdeeper into the requirement.</div>
          </div>
          <div className="analyze">
            <h4><i className="fas fa-file-signature"></i>Analyze</h4>
            <div>Implement findings from the research and building test cases for the client requirements and start creating POC's and Spikes.</div>
          </div>
          <div className="develop">
            <h4><i className="fas fa-laptop-code"></i>Develop</h4>
            <div>Curate all the findings from the research and analyse which phases are to be utilised to convert the <i>ideas and designs</i> into website and that runs seamlessly across all the browsers and devices using latest web trends.</div>
          </div>
          <div className="clean-code">
            <h4><i className="fas fa-code"></i>Clean code</h4>
            <div>I write clean code which can be easy to understand and easy to start work by any developer.</div>
          </div>
        </div>
      </section>
    )
  }
}
