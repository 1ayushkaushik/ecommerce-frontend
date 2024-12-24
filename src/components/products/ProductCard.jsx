import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover"
          />
        ) : (
          <div className="w-full h-80 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">{product.name}</a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category?.name}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
