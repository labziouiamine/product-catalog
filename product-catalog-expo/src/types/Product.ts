export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FilterState {
  selectedCategory: string;
  sortOrder: 'none' | 'asc' | 'desc';
  searchTerm: string;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

