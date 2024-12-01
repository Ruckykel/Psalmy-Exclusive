// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProductData } from './ProductData';

const ProductPictures = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const productsPerPage = 12;
  const totalPages = Math.ceil(ProductData.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductData.slice(indexOfFirstProduct, indexOfLastProduct);

  const [productStates, setProductStates] = useState(currentProducts);

  useEffect(() => {
    setProductStates(currentProducts.map(product => ({
      ...product,
      isShowingHoverImage: false
    })));
  }, [currentPage]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleProductClick = (productId) => {
    if (windowWidth < 1024) {
      setProductStates(prevStates =>
        prevStates.map(product =>
          product.id === productId
            ? { ...product, isShowingHoverImage: !product.isShowingHoverImage }
            : product
        )
      );
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl sm:text-4xl leading-tight text-center font-normal mb-11 sm:mb-16">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productStates.map((product) => (
          <motion.div
            key={product.id}
            className="relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleProductClick(product.id)}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative overflow-hidden aspect-[3/4]">
              {/* Main Image - Always visible */}
              <img
                src={product.mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Image - Only on desktop */}
              {windowWidth >= 1024 && (
                <img
                  src={product.hoverImage}
                  alt={`${product.name} alternate view`}
                  className={`
                    absolute inset-0 w-full h-full object-cover 
                    transition-opacity duration-[800ms] ease-in-out
                    ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}
                  `}
                />
              )}
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium">{product.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-12 mb-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`
              w-10 h-10 rounded-full text-sm font-medium
              transition-all duration-200 ease-in-out
              ${currentPage === pageNum
                ? 'bg-gray-100 text-black'
                : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }
            `}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPictures;