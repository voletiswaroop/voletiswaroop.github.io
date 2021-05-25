import './projects.css'
import projectIcon from '../../assets/project-icon.png'
import EasyTabs from 'react-tabs-lite'
import 'react-tabs-lite/dist/index.css'

const projects = () => {

  const toggleAnimation = (e) => {
    e.currentTarget.closest('.projects-wrapper').classList.toggle("animated-view");
    this.setState({ loadmore: false, loadmorePP: false })
  }

  return (
    <section className="projects-wrapper" id="projects">
      <div className="toggle-view-btns" onClick={(e) => toggleAnimation(e)}><span>3D</span><span>2D</span></div>
      <div className="container">
        <h3><img src={projectIcon} alt="projects" />Projects</h3>
        <div className="projects-wrapper">
          <EasyTabs defaultSelected={0}>
            <section title='Npm packages' className="portfolio-list personal-projects npm-projects">
              <div className="mix project-item react javascript">
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-tabs-lite">
                  <p className="project-name">React Tabs Lite</p>
                  <div className="tech-stack">ReactJs, Javascript, Fontawesome &amp; CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div className="mix project-item react javascript">
                <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-material-ui-form">
                  <p className="project-name">React Material UI Form</p>
                  <div className="tech-stack">ReactJs and Javascript</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2018</span>
              </div>
            </section>

            <section title='Personal learning projects' className="portfolio-list personal-projects">

              <div style={{ "--item-number": "1" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/react-dnd-charts/">
                  <p className="project-name">React Drag and Drop Charts</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">April, 2021</span>
              </div>
              <div style={{ "--item-number": "9" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/shuffle-and-sort/">
                  <p className="project-name">Shuffle &amp; Sort</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "2" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/sp-tiktok/">
                  <p className="project-name">Tiktok Clone</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/covid19">
                  <p className="project-name">COVID 19</p>
                  <div className="tech-stack">ReactJs, Javascript, CanvasJS, HTML &amp; CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "4" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/stopwatch/">

                  <p className="project-name">React Stopwatch</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              <div style={{ "--item-number": "5" }} className="mix project-item javascript">
                <a target="_blank" rel="noopener noreferrer" href="https://voletiswaroop.github.io/match-mania/">
                  <p className="project-name">Match Mania JS Game</p>
                  <div className="tech-stack">Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              <div style={{ "--item-number": "6" }} className="mix project-item javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/voletiswaroop/ATM-dispencer">
                  <p className="project-name">ATM dispencer</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML and CSS</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2019</span>
              </div>
              <div style={{ "--item-number": "7" }} className="mix project-item cms bootstrap wordpress disabled">
                <a target="_blank" rel="noopener noreferrer" href="https://www.tuts.alljobsindia.in/">
                  <p className="project-name">Online Tutorials for web developer</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2015 - Shutdown @2017</span>
              </div>
              <div style={{ "--item-number": "8" }} className="mix project-item cms javascript bootstrap disabled wordpress cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.alljobsindia.in/">
                  <p className="project-name">Alljobsindia</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, Bootstrap and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date"><i className="fas fa-sunset"></i>Released @2013 - Shutdown @2017</span>
              </div>
            </section>

            <section title='Professional Projects' className="portfolio-list professional-projects">
              <div style={{ "--item-number": "11" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" rel="noopener noreferrer" href="http://forms.athenahealth.com/">
                  <p className="project-name">React Forms</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2021</span>
              </div>
              <div style={{ "--item-number": "1" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.epocrates.com/">
                  <p className="project-name">Epocrates</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2020</span>
              </div>
              <div style={{ "--item-number": "2" }} className="mix project-item drupal javascript react">
                <a target="_blank" rel="noopener noreferrer" href="https://athenahealth.com/knowledge-hub">
                  <p className="project-name">Insights athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2016 - Redesigned @2019</span>
              </div>
              <div style={{ "--item-number": "3" }} className="mix project-item drupal javascript react cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.athenahealth.com/">
                  <p className="project-name">Athenahealth</p>
                  <div className="tech-stack">ReactJs, Javascript, HTML, Stylus, Material form and Drupal</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">Revamped @2017 - Redesigned @2018</span>
              </div>
              <div style={{ "--item-number": "4" }} className="mix project-item bootstrap javascript cssfw">
                <a target="_blank" rel="noopener noreferrer" href="https://www.bankbazaar.com/">
                  <p className="project-name">Bankbazaar</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS and Flat UI</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2016</span>
              </div>
              <div style={{ "--item-number": "5" }} className="mix project-item bootstrap material magento javascript cssfw" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.hihonor.com/global/">
                  <p className="project-name">Huawei global</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, SCSS, CSSLint, Material UI, Angular Ui and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2015</span>
              </div>
              <div style={{ "--item-number": "6" }} className="mix project-item magento bootstrap cssfw" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.bodyguardz.com/">
                  <p className="project-name">Bodyguardz</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Bootstrap and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2014</span>
              </div>
              <div style={{ "--item-number": "7" }} className="mix project-item cmsdrupal magento wordpress javascript" >
                <a target="_blank" rel="noopener noreferrer" href="https://tennishub.in/">
                  <p className="project-name">Tennishub</p>
                  <div className="tech-stack">Javascript, jQuery, HTML, CSS, Magento, Drupal and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2013</span>
              </div>
              <div style={{ "--item-number": "8" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.olovesm.com">
                  <p className="project-name">Olovesm</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div>
              <div style={{ "--item-number": "9" }} className="mix project-item cms magento wordpress" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.genesisdiamonds.net/">
                  <p className="project-name">Genesisdiamonds</p>
                  <div className="tech-stack">jQuery, HTML, CSS, Magento and Wordpress</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div>
              <div style={{ "--item-number": "10" }} className="mix project-item cms magento" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.weddingrings.net/">
                  <p className="project-name">Weddingrings</p>
                  <div className="tech-stack">jQuery, HTML, CSS and Magento</div>
                  <span className="arrow"></span>
                </a>
                <span className="released-date">2012</span>
              </div>
            </section>

          </EasyTabs>
        </div>
      </div>
    </section>
  )
}
export default projects