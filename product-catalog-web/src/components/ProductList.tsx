import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';



function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-10 bg-gray-50 rounded-lg text-gray-600">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;