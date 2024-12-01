// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import BestSeller from './BestSeller'
import Footer from './Footer'
import AboutCompany from './AboutCompany'
import AboutCeo from './AboutCeo'
import Achievements from './Achievements'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
      <BestSeller />
      <AboutCompany />
      <AboutCeo />
      <Achievements />
      <Footer />
    </div>
  )
}

export default Home