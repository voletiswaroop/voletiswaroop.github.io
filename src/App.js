import React, { useEffect, Suspense } from 'react';
import './App.css'
import Header from './components/header/header'
// import Announcements from './components/announcements/announcements'
import AboutMe from './components/about/about'
import Experience from './components/experience/experience'
import Education from './components/education/education'
import Footer from './components/footer/footer'
import Global from './components/globalData/global'

const SkillSet = React.lazy(() => import('./components/skillset/skills'));
const Projects = React.lazy(() => import('./components/projects/projects'));
const Recognitions = React.lazy(() => import('./components/recognitions/recognitions'));

const App = () => {

  const animateSections = () => {
    let animateClass = document.getElementsByTagName('section');
    Array.from(animateClass).map(item => {
      let bounding = item.getBoundingClientRect();
      if (bounding.top + 150 <= window.innerHeight) {
        item.classList.add('start-animation')
      }
      return bounding;
    })
  }

  useEffect(() => {
    animateSections()
    window.addEventListener('scroll', animateSections)
    return () => {
      window.removeEventListener('scroll', animateSections);
    }
  }, [])

  return (
    <main className="page-wrapper">
      <Header />
      <div className="page-components">
        {/* <Announcements /> */}
        <AboutMe />
        <Suspense fallback={<div>Loading components...</div>}>
          <SkillSet />
          <Projects />
          <Experience />
        </Suspense>
      </div>
      <Global />
      <div className="fixed-footer">
        <Suspense fallback={<div>Loading components...</div>}>
          <Recognitions />
          <Education />
          <Footer />
        </Suspense>
      </div>
    </main>
  )
}
export default App