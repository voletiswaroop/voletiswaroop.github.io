import React, { Component } from 'react'
import './projects.css'
import projectIcon from '../../assets/project-icon.png'
import mixitup from 'mixitup';

export default class projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      loadmorePP: true
    }
  }

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
    this.setState({ loadmore: false, loadmorePP: false })
  }

  loadmore() {
    this.setState({ loadmore: false })
  }

  loadmorePP() {
    this.setState({ loadmorePP: false })
  }

  render() {
    let { loadmore, loadmorePP } = this.state;
    return (
      <section className="projects-wrapper" id="projects">
        <div className="toggle-view-btns" onClick={(e) => this.toggleAnimation(e)}><span>3D</span><span>2D</span></div>
        <div className="container">
          <h3><img src={projectIcon} alt="projects" />Projects</h3>
          {/* <div className="projects-completion-container">
            <div className="left-aligned">
              <div className="number-field">
                <span className="free-fall-animation">3</span>
                <span className="free-fall-animation">0</span>
                <span className="free-fall-animation superscript">+</span>
              </div></div>
            <div className="right-aligned">
              <p className="projects-title">PROJECTS COMPLETED</p>
              <span>Over the past Nine and half years, I have completed more than <b>32</b> responsive or adapative web apps, each of them is completely from the scratch.</span>
            </div>
          </div> */}
          <h2>My professional projects</h2>
          <div className="projects-wrapper">
            <div className={`project-type ${loadmore ? 'loadmore' : null}`} >
              <button className="filter" data-filter="all">All</button>
              <button className="filter" data-filter=".react">ReactJs</button>
              <button className="filter" data-filter=".javascript">JavaScript</button>
              <button className="filter" data-filter=".cssfw">CSS framework</button>
              <button className="filter" data-filter=".magento">Magento</button>
              <button className="filter" data-filter=".drupal">Drupal</button>
              <button className="filter" data-filter=".wordpress">Wordpress</button>
            </div>
            <div className={`portfolio-list professional-projects ${loadmore ? 'loadmore' : null}`}>
              <div style={{ "--item-number": "1" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.epocrates.com/">
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
                <a target="_blank" rel="noopener noreferrer" href="https://athenahealth.com/knowledge-hub">
                  {/* <img src={ahi} alt="athenahealth knowledge hub" /> */}
                  <p className="project-name">Insights athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2016 - Redesigned @2019</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.athenahealth.com/">
                  {/* <img src={ah} alt="Athenahealth" /> */}
                  <p className="project-name">Athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2017 - Redesigned @2018</span>
              </div>
              <div style={{ "--item-number": "4" }} className="mix project-item bootstrap javascript cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.bankbazaar.com/">
                  {/* <img src={bb} alt="bankbazaar" /> */}
                  <p className="project-name">Bankbazaar</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS and Flat UI</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2016</span>
              </div>
              <div style={{ "--item-number": "5" }} className="mix project-item bootstrap material magento javascript cssfw" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.hihonor.com/global/">
                  {/* <img src={huawei} alt="Huawei global" /> */}
                  <p className="project-name">Huawei global</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, CSSLint, Material UI, Angular Ui and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2015</span>
              </div >
              <div style={{ "--item-number": "6" }} className="mix project-item magento bootstrap cssfw" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.bodyguardz.com/">
                  {/* <img src={bodyguardz} alt="bodyguardz" /> */}
                  <p className="project-name">Bodyguardz</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Bootstrap and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2014</span>
              </div >
              <div style={{ "--item-number": "7" }} className="mix project-item cmsdrupal magento wordpress javascript" >
                <a target="_blank" rel="noopener noreferrer" href="https://tennishub.in/">
                  {/* <img src={tennishub} alt="tennishub" /> */}
                  <p className="project-name">Tennishub</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Magento, Drupal and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2013</span>
              </div >
              <div style={{ "--item-number": "8" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.olovesm.com">
                  {/* <img src={olovesm} alt="Olovesm" /> */}
                  <p className="project-name">Olovesm</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div >
              <div style={{ "--item-number": "9" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.genesisdiamonds.net/">
                  {/* <img src={genesisdiamonds} alt="Genesisdiamonds" /> */}
                  <p className="project-name">Genesisdiamonds</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div >
              <div style={{ "--item-number": "10" }} className="mix project-item cms magento" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.weddingrings.net/">
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
            {loadmore ? <button className="load-more-btn" onClick={() => this.loadmore()}>Loadmore</button> : null}
            <h2 className="personal-projects-title">Personal learning projects</h2>
            <div className={`portfolio-list personal-projects  ${loadmorePP ? 'loadmore' : null}`}>
              <div style={{ "--item-number": "1" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/react-dnd-charts/">
                  {/* <div className="valign"></div><br /> */}
                  <p className="project-name">React Drag and Drop Charts</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">April, 2021</span>
              </div>
              <div style={{ "--item-number": "9" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/shuffle-and-sort/">
                  {/* <div className="valign"></div><br /> */}
                  <p className="project-name">Shuffle &amp; Sort</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "2" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/sp-tiktok/">
                  {/* <div className="valign"></div><br /> */}
                  <p className="project-name">Tiktok Clone</p>
                  <div className="tech-stack">React, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/covid19">
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
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io">
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
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/stopwatch/">
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
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/match-mania/">
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
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/voletiswaroop/ATM-dispencer">
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
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-material-ui-form">
                  <div className="valign"></div><br />
                  <p className="project-name">React Material UI Form</p>
                  <div className="tech-stack">ReactJs, Javascript and NPM</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2018</span>
              </div> */}
              <div style={{ "--item-number": "7" }} className="mix project-item cms bootstrap wordpress disabled">
                <a target="_blank" rel="noopener noreferrer" href="https://www.tuts.alljobsindia.in/">
                  {/* <img src={tuts} alt="Tutorials for web developer" /> */}
                  <p className="project-name">Online Tutorials for web developer</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2015 - Shutdown @2017</span>
              </div>
              <div style={{ "--item-number": "8" }} className="mix project-item cms javascript bootstrap disabled wordpress cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.alljobsindia.in/">
                  {/* <img src={alljobsindia} alt="Alljobsindia" /> */}
                  <p className="project-name">Alljobsindia</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2013 - Shutdown @2017</span>
              </div>
            </div>
            {loadmorePP ? <button className="load-more-btn" onClick={() => this.loadmorePP()}>Loadmore</button> : null}
            <h2>Npm packages</h2>
            <div className="portfolio-list personal-projects npm-projects">
              <div className="mix project-item react javascript">
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-material-ui-form">
                  <p className="project-name">React Material UI Form</p>
                  <div className="tech-stack">ReactJs and Javascript</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2018</span>
              </div>
              <div className="mix project-item react javascript">
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-tabs-lite">
                  <p className="project-name">React Tabs Lite</p>
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
