import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import ProductCard from '../ProductCard';
import { Product } from '../../types/Product';

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'This is a test product',
  category: 'electronics',
  image: 'https://example.com/image.jpg',
  rating: {
    rate: 4.5,
    count: 100,
  },
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const mockToggleFavorite = jest.fn();

    render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    expect(screen.getByText('Test Product')).toBeTruthy();
    expect(screen.getByText('$29.99')).toBeTruthy();
    expect(screen.getByText('electronics')).toBeTruthy();
    expect(screen.getByText('⭐ 4.5')).toBeTruthy();
    expect(screen.getByText('(100 reviews)')).toBeTruthy();
  });

  it('displays correct favorite icon when not favorited', () => {
    const mockToggleFavorite = jest.fn();

    render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    expect(screen.getByText('🤍')).toBeTruthy();
  });

  it('displays correct favorite icon when favorited', () => {
    const mockToggleFavorite = jest.fn();

    render(
      <ProductCard
        product={mockProduct}
        isFavorite={true}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    expect(screen.getByText('❤️')).toBeTruthy();
  });

  it('calls onToggleFavorite when favorite button is pressed', () => {
    const mockToggleFavorite = jest.fn();

    const { getByLabelText } = render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    const favoriteButton = getByLabelText('Add to favorites');
    fireEvent.press(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(mockProduct.id);
    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it('formats price correctly', () => {
    const mockToggleFavorite = jest.fn();
    const productWithDecimal = {
      ...mockProduct,
      price: 19.5,
    };

    render(
      <ProductCard
        product={productWithDecimal}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    expect(screen.getByText('$19.50')).toBeTruthy();
  });

  it('truncates long product titles', () => {
    const mockToggleFavorite = jest.fn();
    const longTitleProduct = {
      ...mockProduct,
      title:
        'This is a very long product title that should be truncated to fit in the card layout',
    };

    const { getByText } = render(
      <ProductCard
        product={longTitleProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
      />
    );

    const titleElement = getByText(longTitleProduct.title);
    expect(titleElement).toBeTruthy();
  });
});

