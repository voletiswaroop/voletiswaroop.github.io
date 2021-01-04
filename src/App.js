import React, { Component, Suspense } from 'react';
import './App.css'
import Header from './components/header/header'
import Announcements from './components/announcements/announcements'
import AboutMe from './components/about/about'
import SkillSet from './components/skillset/skills'
import Experience from './components/experience/experience'
import Education from './components/education/education'
import Footer from './components/footer/footer'

const Projects = React.lazy(() => import('./components/projects/projects'));
const Recognitions = React.lazy(() => import('./components/recognitions/recognitions'));

export default class App extends Component {
  animateSections = () => {
    let animateClass = document.getElementsByTagName('section');
    Array.from(animateClass).map(item => {
      let bounding = item.getBoundingClientRect();
      if (bounding.top + 150 <= window.innerHeight) {
        item.classList.add('start-animation')
      }
      return bounding;
    })
  }
  componentDidMount() {
    this.animateSections()
    window.addEventListener('scroll', this.animateSections)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateSections);
  }
  render() {
    return (
      <main className="page-wrapper">
        <div className="page-components">
          <Header />
          <Announcements />
          <AboutMe />
          <SkillSet />
          <Experience />
          <Suspense fallback={<div>Loading components...</div>}>
            <Projects />
          </Suspense>
        </div>
        <div className="fixed-footer">
          <Suspense fallback={<div>Loading components...</div>}>
            <Recognitions />
          </Suspense>
          <Education />
          <Footer />
        </div>
      </main>
    )
  }
} 