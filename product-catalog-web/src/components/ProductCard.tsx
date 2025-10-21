import React, { useState } from 'react';
import { Product } from '../types/Product';

function ProductCard({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative pt-[56.25%] bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="absolute top-0 left-0 w-full h-full object-contain p-4" 
        />
        <button 
          className={`absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full ${isFavorite ? 'bg-red-50' : 'bg-white/80'} transition-transform hover:scale-110`} 
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ?  '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-lg font-bold text-red-600 my-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded inline-block mb-2 capitalize">{product.category}</p>
        <div className="mt-auto flex items-center text-sm text-gray-600">
          <span>⭐ {product.rating.rate}</span>
          <span className="ml-2 text-xs">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;