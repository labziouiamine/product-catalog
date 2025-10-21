import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Product, FilterState } from './src/types/Product';
import ProductList from './src/components/ProductList';
import FilterBar from './src/components/FilterBar';
import PaginationControls from './src/components/PaginationControls';
import {
  filterAndSortProducts,
  getUniqueCategories,
  getPaginatedProducts,
  getTotalPages,
} from './src/utils/productUtils';
import {
  loadFavorites,
  saveFavorites,
  addFavorite,
  removeFavorite,
} from './src/utils/storageUtils';

const ITEMS_PER_PAGE = 2;

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [filters, setFilters] = useState<FilterState>({
    selectedCategory: 'all',
    sortOrder: 'none',
    searchTerm: '',
  });

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setPaginatedProducts(getPaginatedProducts(data, 1, ITEMS_PER_PAGE));

        // Extract unique categories
        const uniqueCategories = getUniqueCategories(data);
        setCategories(uniqueCategories);

        // Load favorites from storage
        const savedFavorites = await loadFavorites();
        setFavorites(savedFavorites);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    const filtered = filterAndSortProducts(products, filters);
    setFilteredProducts(filtered);
    setCurrentPage(1);
    const paginated = getPaginatedProducts(filtered, 1, ITEMS_PER_PAGE);
    setPaginatedProducts(paginated);
  }, [filters, products]);

  // Handle pagination
  useEffect(() => {
    const paginated = getPaginatedProducts(
      filteredProducts,
      currentPage,
      ITEMS_PER_PAGE
    );
    setPaginatedProducts(paginated);
  }, [currentPage, filteredProducts]);

  const handleSearchChange = useCallback((text: string) => {
    setFilters((prev) => ({ ...prev, searchTerm: text }));
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setFilters((prev) => ({ ...prev, selectedCategory: category }));
  }, []);

  const handleSortChange = useCallback(
    (sort: 'none' | 'asc' | 'desc') => {
      setFilters((prev) => ({ ...prev, sortOrder: sort }));
    },
    []
  );

  const handleToggleFavorite = useCallback(
    async (productId: number) => {
      let updated: number[];
      if (favorites.includes(productId)) {
        updated = await removeFavorite(favorites, productId);
      } else {
        updated = await addFavorite(favorites, productId);
      }
      setFavorites(updated);
    },
    [favorites]
  );

  const totalPages = getTotalPages(filteredProducts.length, ITEMS_PER_PAGE);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>Loading products...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Product Catalog</Text>
        </View>

        <FilterBar
          filters={filters}
          categories={categories}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />

        <View style={styles.content}>
          <ProductList
            products={paginatedProducts}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            loading={false}
          />
        </View>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          totalProducts={filteredProducts.length}
          onPageChange={setCurrentPage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
});
