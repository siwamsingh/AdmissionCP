import React from 'react'
import Header from './components/Header/Header'
import CollegeImages from './components/Header/Headline'
import ExploreBlock from './components/ExploreCourses/ExploreBlock'
import Counselling from './components/Counseling/Counselling'
import City from './components/ExploreCities/City'
import StudyAbroad from './components/StudyAbroad/StudyAbroad'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div >
      <Header/>
      <CollegeImages/>
      <ExploreBlock/>
      <Counselling/>
      <City/>
      <StudyAbroad/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
