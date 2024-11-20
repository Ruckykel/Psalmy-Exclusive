// eslint-disable-next-line no-unused-vars
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 animate-fadeIn">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-gray-500">{product.price}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xl font-semibold">
        View Details
      </div>
    </div>
  );
};

export default ProductCard;