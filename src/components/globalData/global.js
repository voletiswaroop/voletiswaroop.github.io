import './global.css'
import Resume from '../../assets/swaroop-senior-web-developer.pdf'

export default global = () => {

  return (
    <div className="global">
      <ul className="follow-section">
        <li><a href="https://www.linkedin.com/in/voletiswaroop/" target="_blank" rel="noopener noreferrer" title="LinkedIn profile"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/voletiswaroop" target="_blank" rel="noopener noreferrer" title="github profile"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.npmjs.com/~swaroop.voleti" target="_blank" rel="noopener noreferrer" title="NPM package"><i className="fab fa-npm"></i></a></li>
        <li><a href={Resume} download title="Download resume" target="_blank"><i className="fa fa-download left"></i></a></li>
        {/* <li><a target="_blank" rel="noopener noreferrer" href="mailto:voleti.swaroop@gmail.com" title="contact me"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li> */}
      </ul>
      <p className="scrollTop" onClick={() => window.scrollTo(0, 0)}><i className="fa fa-angle-double-up" aria-hidden="true"></i></p>
    </div>
  )
}
