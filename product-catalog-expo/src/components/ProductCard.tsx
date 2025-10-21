import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={[
            styles.favoriteButton,
            isFavorite && styles.favoriteButtonActive,
          ]}
          onPress={() => onToggleFavorite(product.id)}
        >
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>

        <Text style={styles.price}>${product.price.toFixed(2)}</Text>

        <Text style={styles.category}>{product.category}</Text>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {product.rating.rate}</Text>
          <Text style={styles.reviewCount}>
            ({product.rating.count} reviews)
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: 'rgba(255, 200, 200, 0.9)',
  },
  favoriteIcon: {
    fontSize: 20,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    height: 40,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 11,
    color: '#999',
  },
});

export default ProductCard;

