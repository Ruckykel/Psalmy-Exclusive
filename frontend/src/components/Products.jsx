// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductPictures from './ProductPictures'

const Products = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ProductPictures />
      <Footer />
    </div>
  )
}

export default Products