// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import BestSeller from './BestSeller'
import HomeAbout from './HomeAbout'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <HomeHero />
      <BestSeller />
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home