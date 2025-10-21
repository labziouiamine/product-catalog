import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
  loading: boolean;
  onEndReached?: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  favorites,
  onToggleFavorite,
  loading,
  onEndReached,
}) => {
  if (loading && products.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Loading products...</Text>
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>No products found</Text>
        <Text style={styles.emptySubText}>
          Try adjusting your filters or search term
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          isFavorite={favorites.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      )}
      scrollEnabled={false}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default ProductList;

