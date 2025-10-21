import { Product, FilterState } from '../types/Product';

export const filterAndSortProducts = (
  products: Product[],
  filters: FilterState
): Product[] => {
  let result = [...products];

  // Apply category filter
  if (filters.selectedCategory !== 'all') {
    result = result.filter(
      (product) => product.category === filters.selectedCategory
    );
  }

  // Apply search filter
  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    result = result.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
  }

  // Apply sorting
  if (filters.sortOrder === 'asc') {
    result = result.sort((a, b) => a.price - b.price);
  } else if (filters.sortOrder === 'desc') {
    result = result.sort((a, b) => b.price - a.price);
  }

  return result;
};

export const getUniqueCategories = (products: Product[]): string[] => {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return categories.sort();
};

export const getPaginatedProducts = (
  products: Product[],
  currentPage: number,
  itemsPerPage: number
): Product[] => {
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  return products.slice(indexOfFirstProduct, indexOfLastProduct);
};

export const getTotalPages = (
  totalProducts: number,
  itemsPerPage: number
): number => {
  return itemsPerPage > 0
    ? Math.max(1, Math.ceil(totalProducts / itemsPerPage))
    : 1;
};

