import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock fetch
global.fetch = jest.fn();

describe('App Component', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('renders the Product Catalog title', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Product Catalog')).toBeInTheDocument();
    });
  });

  it('displays loading state initially', () => {
    (global.fetch as jest.Mock).mockImplementationOnce(
      () => new Promise(() => {}) // Never resolves
    );

    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders search input', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
    });
  });

  it('renders category filter dropdown', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByDisplayValue('All Categories')).toBeInTheDocument();
    });
  });

  it('renders sort dropdown', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [],
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByDisplayValue('None')).toBeInTheDocument();
    });
  });
});
