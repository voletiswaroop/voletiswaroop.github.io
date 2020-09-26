import React, { Component } from 'react'
import './projects.css'
import projectIcon from '../../assets/project-icon.png'
import mixitup from 'mixitup';
// import covid from '../../assets/projectImgs/covid.png'
// import sgv from '../../assets/Slogo.jpg'
// import stopWatch from '../../assets/projectImgs/stopwatch.png'
// import alljobsindia from '../../assets/projectImgs/alljobsindia.jpg'
// import tuts from '../../assets/projectImgs/tuts.jpg'
// import game from '../../assets/projectImgs/guessing-game.png'
// import atm from '../../assets/projectImgs/atm.png'
// import epoc from '../../assets/projectImgs/epocrates.png'
// import ah from '../../assets/projectImgs/ah.jpg'
// import ahi from '../../assets/projectImgs/ahi.jpg'
// import bb from '../../assets/projectImgs/bankbazaar.jpg'
// import huawei from '../../assets/projectImgs/huawei.jpg'
// import bodyguardz from '../../assets/projectImgs/bodyguardz.jpg'
// import tennishub from '../../assets/projectImgs/tennishub.jpg'
// import olovesm from '../../assets/projectImgs/olovesm.jpg'
// import genesisdiamonds from '../../assets/projectImgs/genesisdiamonds.jpg'
// import weddingrings from '../../assets/projectImgs/wedding-rings.png'

export default class projects extends Component {

  componentDidMount() {
    mixitup('.professional-projects', {
      animation: {
        perspectiveDistance: '2000px',
        easing: 'ease-in-out',
      }
    })
  }

  toggleAnimation(e) {
    e.currentTarget.closest('.projects-wrapper').classList.toggle("animated-view");
  }

  render() {

    return (
      <section className="projects-wrapper animated-view" id="projects">
        <div className="toggle-view-btns" onClick={(e) => this.toggleAnimation(e)}><span>3D</span><span>2D</span></div>
        <div className="container">
          <h3><img src={projectIcon} alt="projects" />Projects</h3>
          <div className="projects-completion-container">
            <div className="left-aligned">
              <div className="number-field">
                <span className="free-fall-animation">3</span>
                <span className="free-fall-animation">0</span>
                <span className="free-fall-animation superscript">+</span>
              </div></div>
            <div className="right-aligned">
              <p className="projects-title">PROJECTS COMPLETED</p>
              <span>Over the past Eight and half years, I have completed more than <b>32</b> responsive or adapative web apps, each of them is completely from the scratch.</span>
            </div>
          </div>
          <h2>My professional projects</h2>
          <div className="projects-wrapper">
            <div className="project-type">
              <button className="filter" data-filter="all">All</button>
              <button className="filter" data-filter=".react">ReactJs</button>
              <button className="filter" data-filter=".javascript">JavaScript</button>
              <button className="filter" data-filter=".cssfw">CSS framework</button>
              <button className="filter" data-filter=".magento">Magento</button>
              <button className="filter" data-filter=".drupal">Drupal</button>
              <button className="filter" data-filter=".wordpress">Wordpress</button>
            </div>
            <div className="portfolio-list professional-projects">
              <div style={{ "--item-number": "1" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" href="https://www.epocrates.com/">
                  {/* <div className="valign">
                    <img src={epoc} alt="Epocrates" />
                  </div> */}
                  <p className="project-name">Epocrates</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "2" }} className="mix project-item drupal javascript react">
                <a target="_blank" href="https://athenahealth.com/knowledge-hub">
                  {/* <img src={ahi} alt="athenahealth knowledge hub" /> */}
                  <p className="project-name">Insights athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2016 - Redesigned @2019</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" href="https://www.athenahealth.com/">
                  {/* <img src={ah} alt="Athenahealth" /> */}
                  <p className="project-name">Athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2017 - Redesigned @2018</span>
              </div>
              <div style={{ "--item-number": "4" }} className="mix project-item bootstrap javascript cssfw">
                <a target="_blank" href="https://www.bankbazaar.com/">
                  {/* <img src={bb} alt="bankbazaar" /> */}
                  <p className="project-name">Bankbazaar</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS and Flat UI</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2016</span>
              </div>
              <div style={{ "--item-number": "5" }} className="mix project-item bootstrap material magento javascript cssfw" >
                <a target="_blank" href="https://www.hihonor.com/global/">
                  {/* <img src={huawei} alt="Huawei global" /> */}
                  <p className="project-name">Huawei global</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, CSSLint, Material UI, Angular Ui and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2015</span>
              </div >
              <div style={{ "--item-number": "6" }} className="mix project-item magento bootstrap cssfw" >
                <a target="_blank" href="https://www.bodyguardz.com/">
                  {/* <img src={bodyguardz} alt="bodyguardz" /> */}
                  <p className="project-name">Bodyguardz</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Bootstrap and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2014</span>
              </div >
              <div style={{ "--item-number": "7" }} className="mix project-item cmsdrupal magento wordpress javascript" >
                <a target="_blank" href="https://tennishub.in/">
                  {/* <img src={tennishub} alt="tennishub" /> */}
                  <p className="project-name">Tennishub</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Magento, Drupal and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2013</span>
              </div >
              <div style={{ "--item-number": "8" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" href="https://www.olovesm.com">
                  {/* <img src={olovesm} alt="Olovesm" /> */}
                  <p className="project-name">Olovesm</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div >
              <div style={{ "--item-number": "9" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" href="https://www.genesisdiamonds.net/">
                  {/* <img src={genesisdiamonds} alt="Genesisdiamonds" /> */}
                  <p className="project-name">Genesisdiamonds</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div >
              <div style={{ "--item-number": "10" }} className="mix project-item cms magento" > <br />
                <a target="_blank" href="https://www.weddingrings.net/">
                  {/* <div className="valign">
                    <img src={weddingrings} alt="Weddingrings" />
                  </div> */}
                  <p className="project-name">Weddingrings</p>
                  <div className="tech-stack">jQuery, HTML, CSS and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div >
            </div >
            <h2 className="personal-projects-title">Personal learning projects</h2>
            <div className="portfolio-list personal-projects">
              <div style={{ "--item-number": "1" }} className="mix project-item javascript react">
                <a target="_blank" href="https://voletiswaroop.github.io/shuffle-and-sort/">
                  {/* <div className="valign"></div><br /> */}
                  <p className="project-name">Shuffle &amp; Sort</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "2" }} className="mix project-item javascript react">
                <a target="_blank" href="https://voletiswaroop.github.io/sp-tiktok/">
                  {/* <div className="valign"></div><br /> */}
                  <p className="project-name">Tiktok Clone</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item javascript react">
                <a target="_blank" href="https://voletiswaroop.github.io/covid19">
                  {/* <div className="valign">
                    <img src={covid} alt="Covid19" />
                  </div> */}
                  <p className="project-name">COVID 19</p>
                  <div className="tech-stack">React, Javascript, CanvasJS, HTML &amp; CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              {/* <div style={{ "--item-number": "4" }} className="mix project-item javascript react">
                <a target="_blank" href="https://voletiswaroop.github.io">
                  <div className="valign">
                    <img src={sgv} alt="Swaroop Gupta Voleti" />
                  </div>
                  <br />
                  <p className="project-name">Swaroop Gupta Voleti</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2020 - Initial release @2014</span>
              </div> */}
              <div style={{ "--item-number": "4" }} className="mix project-item javascript react">
                <a target="_blank" href="https://voletiswaroop.github.io/reactLearning/">
                  {/* <div className="valign">
                    <img src={stopWatch} alt="React stopwatch" />
                  </div>
                  <br /> */}
                  <p className="project-name">React Stopwatch</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              <div style={{ "--item-number": "5" }} className="mix project-item javascript">
                <a target="_blank" href="https://voletiswaroop.github.io/match-mania/">
                  {/* <div className="valign">
                    <img src={game} alt="Match menia Game" />
                  </div> */}
                  {/* <br /> */}
                  <p className="project-name">Match Mania JS Game</p>
                  <div className="tech-stack">Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              <div style={{ "--item-number": "6" }} className="mix project-item javascript react">
                <a target="_blank" href="https://github.com/voletiswaroop/ATM-dispencer">
                  {/* <div className="valign">
                    <img src={atm} alt="ATM dispencer" />
                  </div><br /> */}
                  <p className="project-name">ATM dispencer</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              {/* <div style={{ "--item-number": "7" }} className="mix project-item javascript react">
                <a target="_blank" href="https://www.npmjs.com/package/react-material-ui-form">
                  <div className="valign"></div><br />
                  <p className="project-name">React Material UI Form</p>
                  <div className="tech-stack">ReactJs, Javascript and NPM</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2018</span>
              </div> */}
              <div style={{ "--item-number": "7" }} className="mix project-item cms bootstrap wordpress disabled">
                <a target="_blank" href="https://www.tuts.alljobsindia.in/">
                  {/* <img src={tuts} alt="Tutorials for web developer" /> */}
                  <p className="project-name">Online Tutorials for web developer</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2015 - Shutdown @2017</span>
              </div>
              <div style={{ "--item-number": "8" }} className="mix project-item cms javascript bootstrap disabled wordpress cssfw">
                <a target="_blank" href="https://www.alljobsindia.in/">
                  {/* <img src={alljobsindia} alt="Alljobsindia" /> */}
                  <p className="project-name">Alljobsindia</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2013 - Shutdown @2017</span>
              </div>
            </div>
            <h2>Npm packages</h2>
            <div className="portfolio-list personal-projects npm-projects">
              <div className="mix project-item react javascript">
                <a target="_blank" href="https://www.npmjs.com/package/react-material-ui-form">
                  <p className="project-name">React Material UI Form</p>
                  <div className="tech-stack">ReactJs and Javascript</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2018</span>
              </div>
              <div className="mix project-item react javascript">
                <a target="_blank" href="https://www.npmjs.com/package/react-material-ui-form">
                  <p className="project-name">React Easy Tabs</p>
                  <div className="tech-stack">ReactJs, Javascript, Fontawesome &amp; CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
