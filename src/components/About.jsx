// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import AboutCompany from './AboutCompany'
import AboutCeo from './AboutCeo'
import Footer from './Footer'

const About = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <AboutCompany />
      <AboutCeo />
      <Footer />
    </div>
  )
}

export default About