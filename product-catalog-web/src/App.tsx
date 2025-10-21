import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('none');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(2);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json() as Promise<Product[]>)
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
        
        // Extract unique categories (as strings)
        const uniqueCategories = Array.from(new Set(data.map((product) => product.category)));
        setCategories(uniqueCategories);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result: Product[] = [...products];
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Apply sorting
    if (sortOrder === 'asc') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      result = result.sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, sortOrder, searchTerm]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = itemsPerPage > 0 ? Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage)) : 1;

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, sortOrder]);

  if (loading) return <div className="flex justify-center items-center h-screen text-xl text-gray-600">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Product Catalog</h1>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6 space-y-4 md:space-y-0 md:flex md:flex-wrap md:gap-4">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-2 md:w-1/2 lg:w-auto">
          <label htmlFor="category-select" className="font-medium text-gray-700">Category:</label>
          <select 
            id="category-select" 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2 md:w-1/2 lg:w-auto">
          <label htmlFor="sort-select" className="font-medium text-gray-700">Sort by Price:</label>
          <select 
            id="sort-select" 
            value={sortOrder} 
            onChange={handleSortChange}
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="none">None</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      
      <ProductList products={currentProducts} />
      
      {/* Pagination Controls */}
      {filteredProducts.length > 0 && (
        <div className="flex flex-row justify-center items-center mt-8 gap-1 ">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {'<'}
          </button>
          
          <div className="flex flex-wrap justify-center gap-1">
            {/* First page */}
            {totalPages > 0 && (
              <button
                onClick={() => paginate(1)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                1
              </button>
            )}
            
            {/* Ellipsis before current pages */}
            {currentPage > 3 && (
              <span className="px-2 flex items-center justify-center">...</span>
            )}
            
            {/* Pages around current page */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => page !== 1 && page !== totalPages && page >= currentPage - 1 && page <= currentPage + 1)
              .map(page => (
                <button
                  key={page}
                  onClick={() => paginate(page)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {page}
                </button>
              ))
            }
            
            {/* Ellipsis after current pages */}
            {currentPage < totalPages - 2 && (
              <span className="px-2 flex items-center justify-center">...</span>
            )}
            
            {/* Last page */}
            {totalPages > 1 && (
              <button
                onClick={() => paginate(totalPages)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {totalPages}
              </button>
            )}
          </div>
          
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            {'>'}
          </button>
          
        </div>
      )}
    </div>
  );
}

export default App;