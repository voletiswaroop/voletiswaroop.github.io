import React, { Component } from "react";
import "./experience.css";
import zeelogo from "../../assets/companyLogos/ZEE5-logo.svg"
import fwlogo from '../../assets/companyLogos/fw-logo.png';
import ahi from "../../assets/companyLogos/ah-logo.jpeg";
import bblogo from "../../assets/companyLogos/bb-logo.png";
import huaweiLogo from "../../assets/companyLogos/huawei-logo.png";
import innoswiftLogo from "../../assets/companyLogos/innoswift.png";

export default class experience extends Component {
  render() {
    return (
      <section className="experience-wrapper" id="experience">
        <div className="container">
          <h3><i className="fa fa-motorcycle" aria-hidden="true"></i>Career Journey</h3>
          <ul className="timeline-wrapper hide-mobile">
            <li className="timelineItem timeline-alignAlternate">
              <div className="empty"></div>
              <div className="timeline-separator">
                <span className="current-year">{(new Date().getFullYear())}</span>
                <span className="defaultgrey" style={{ borderColor: '#582c83' }}></span>
                <span className="timeline-connector" style={{ height: '55px', backgroundColor: '#582c83' }}></span>
              </div>
              <div className="empty"></div>
            </li>
            <li className="timelineItem timeline-alignAlternate purple">
              <div className="timelineItem-content">
                <a className="designation-details" href="https://www.zee5.com/" target="_blank">
                  <p className="experience-details">June'2022</p>
                  <p className="company-name">Zee5</p>
                  <h4 className="designation">Engineering manager</h4>
                </a>
              </div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#582c83' }}><img loading="lazy" width="36" height="36" src={zeelogo} alt="Athenahealth" className="company-logo" /></span>
                <span className="timeline-connector" style={{ background: 'linear-gradient(2deg, rgb(181, 255, 211) 0.02%, rgb(209, 164, 255) 39.16%, rgb(255, 165, 175) 75.82%, rgb(255, 220, 164) 112%)' }}></span>
              </div>
              <div className="empty"></div>
            </li>
            <li className="timelineItem timeline-alignAlternate yellow">
              <div className="empty"></div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#582c83' }}><img loading="lazy" width="36" height="36" src={fwlogo} alt="freshworks" className="company-logo" /></span>
                <span className="timeline-connector" style={{ backgroundColor: '#582c83' }}></span>
              </div>
              <div className="timelineItem-content">
                <a className="designation-details" href="https://www.freshworks.com/crm/sales/" target="_blank">
                  <p className="experience-details">Oct'2021</p>
                  <p className="company-name">Freshworks</p>
                  <h4 className="designation">Lead Frontend Engineer</h4>
                </a>
              </div>
            </li>
            <li className="timelineItem timeline-alignAlternate purple">
              <div className="timelineItem-content">
                <a className="designation-details" href="https://www.athenahealth.com/" target="_blank">
                  <p className="experience-details">Oct'2016</p>
                  <p className="company-name">Athenahealth</p>
                  <h4 className="designation">Senior Member of Technical Staff</h4>
                </a>
              </div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#582c83' }}><img loading="lazy" width="36" height="36" src={ahi} alt="Athenahealth" className="company-logo" /></span>
                <span className="timeline-connector" style={{ backgroundColor: '#116a9e' }}></span>
              </div>
              <div className="empty"></div>
            </li>
            <li className="timelineItem timeline-alignAlternate blue">
              <div className="empty"></div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#116a9e' }}><img loading="lazy" width="36" height="36" src={bblogo} alt="bankbazaar" className="company-logo" /></span>
                <span className="timeline-connector" style={{ backgroundColor: '#c7000b' }}></span>
              </div>
              <div className="timelineItem-content">
                <a className="designation-details" href="https://www.bankbazaar.com/" target="_blank">
                  <p className="experience-details">Jul'2015</p>
                  <p className="company-name">BankBazaar</p>
                  <h4 className="designation">Senior Web Developer</h4>
                </a>
              </div>
            </li>
            <li className="timelineItem timeline-alignAlternate orange">
              <div className="timelineItem-content">
                <a className="designation-details" href="https://www.hihonor.com/in/" target="_blank">
                  <p className="experience-details">Dec'2014</p>
                  <p className="company-name">Huawei Technologies</p>
                  <h4 className="designation">Web Developer</h4>
                </a>
              </div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#c7000b' }}><img loading="lazy" width="36" height="36" src={huaweiLogo} alt="huaweiLogo" className="company-logo" /></span>
                <span className="timeline-connector" style={{ backgroundColor: '#000' }}></span>
              </div>
              <div className="empty"></div>
            </li>
            <li className="timelineItem timeline-alignAlternate black">
              <div className="empty"></div>
              <div className="timeline-separator">
                <span className="defaultgrey" style={{ borderColor: '#000' }}><img loading="lazy" width="36" height="36" src={innoswiftLogo} alt="Innoswift" className="company-logo" /></span>
              </div>
              <div className="timelineItem-content">
                <a className="designation-details" href="https://innoswift.com/" target="_blank">
                  <p className="experience-details">Jan'2012</p>
                  <p className="company-name">Innoswift Solutions</p>
                  <h4 className="designation">Fullstack Developer &amp; designer</h4>
                </a>
              </div>
            </li>
          </ul>
          <ul className="experience-list hide-destop">
            <li>
              <a href="https://www.athenahealth.com/" target="_blank">
                <img loading="lazy" src={ahi} alt="Athenahealth" width="65" height="65" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Senior Member of Technical Staff (SMTS)</h4>
                  <p className="company-name">Athenahealth</p>
                  <p className="experience-details">Oct'2016 - Present</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.bankbazaar.com/" target="_blank">
                <img loading="lazy" src={bblogo} alt="bankbazaar" width="65" height="65" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Senior Web Developer</h4>
                  <p className="company-name">BankBazaar</p>
                  <p className="experience-details">Jul'2015 - Oct'2017</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.hihonor.com/in/" target="_blank">
                <img loading="lazy" src={huaweiLogo} alt="Huawei Technologies" width="65" height="65" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Web Developer</h4>
                  <p className="company-name">Huawei Technologies</p>
                  <p className="experience-details">Dec'2014 - Jul'2015</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://innoswift.com/" target="_blank">
                <img loading="lazy" src={innoswiftLogo} alt="Innoswift" width="65" height="65" className="company-logo" />
                <div className="designation-details">
                  <h4 className="designation">Fullstack Developer &amp; designer</h4>
                  <p className="company-name">Innoswift Solutions</p>
                  <p className="experience-details">Jan'2012 - Dec'2014</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
