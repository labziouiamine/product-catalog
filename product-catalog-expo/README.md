# Product Catalog - React Native (Expo)

A mobile product catalog application built with React Native and Expo, featuring product browsing, filtering, sorting, and favorites management.

## Features

### Core Features ✅
- **Product Display**: Browse products in a scrollable list with images, titles, prices, and ratings
- **Search**: Full-text search across product titles, descriptions, and categories
- **Category Filtering**: Filter products by category with easy-to-use buttons
- **Price Sorting**: Sort products by price (ascending/descending)
- **Favorites**: Mark/unmark products as favorites with persistent storage
- **Pagination**: Navigate through products with smart pagination controls
- **Responsive Design**: Works seamlessly on phones and tablets

### Bonus Features ✅
- **AsyncStorage Integration**: Favorites are persisted locally for offline access
- **TypeScript**: Full type safety throughout the application
- **Unit Tests**: Comprehensive tests for ProductCard component
- **Clean Architecture**: Modular components and utility functions

## Tech Stack

- **React Native** 0.81.4
- **Expo** ~54.0.14
- **TypeScript** ~5.9.2
- **React Navigation** (for future multi-screen support)
- **AsyncStorage** (for persistent favorites)
- **Jest** & **React Native Testing Library** (for testing)

## Project Structure

```
product-catalog-expo/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx          # Individual product card
│   │   ├── ProductList.tsx          # Product list container
│   │   ├── FilterBar.tsx            # Search, category, sort controls
│   │   ├── PaginationControls.tsx   # Pagination navigation
│   │   └── __tests__/
│   │       └── ProductCard.test.tsx # Component tests
│   ├── types/
│   │   └── Product.ts               # TypeScript interfaces
│   └── utils/
│       ├── productUtils.ts          # Filtering, sorting, pagination logic
│       └── storageUtils.ts          # AsyncStorage operations
├── App.tsx                          # Main app component
├── app.json                         # Expo configuration
├── package.json
├── tsconfig.json
├── jest.config.js                   # Jest configuration
├── jest.setup.js                    # Jest setup
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v20.19.0 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd product-catalog-expo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device or emulator**
   - **iOS**: Press `i` in the terminal or run `npm run ios`
   - **Android**: Press `a` in the terminal or run `npm run android`
   - **Web**: Press `w` in the terminal or run `npm run web`

## Available Scripts

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run on web browser
npm run web

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Design Decisions

### 1. **Component Architecture**
- **Separation of Concerns**: Each component has a single responsibility
- **Reusable Components**: ProductCard, FilterBar, and PaginationControls are independent
- **Props-based Communication**: Components receive data and callbacks via props

### 2. **State Management**
- **Local State**: Used React hooks (useState, useEffect, useCallback) for simplicity
- **No Redux/Context**: Kept it simple for this assignment; could be added for larger apps
- **Memoization**: Used useCallback to prevent unnecessary re-renders

### 3. **Data Fetching**
- **Fetch API**: Used native fetch for API calls
- **Error Handling**: Basic error logging; could be enhanced with user-facing error messages
- **Loading States**: Shows loading indicator while fetching data

### 4. **Filtering & Sorting**
- **Utility Functions**: Extracted logic into `productUtils.ts` for reusability
- **Immutable Updates**: Always create new arrays to avoid mutation issues
- **Efficient Filtering**: Applied filters in sequence (category → search → sort)

### 5. **Favorites Persistence**
- **AsyncStorage**: Used for offline storage of favorite product IDs
- **Automatic Sync**: Favorites are loaded on app start and saved on every change
- **Scalable**: Can easily be extended to sync with a backend

### 6. **Pagination**
- **Smart Display**: Shows page numbers with ellipsis for large page counts
- **User-Friendly**: Previous/Next buttons with disabled states
- **Reset on Filter**: Pagination resets to page 1 when filters change

### 7. **Testing**
- **Jest + React Native Testing Library**: Industry-standard testing tools
- **Component Tests**: Tests for ProductCard covering rendering, interactions, and edge cases
- **Mock Data**: Uses realistic mock product data
- **Mocked Dependencies**: AsyncStorage and fetch are mocked for isolated testing

## API Integration

The app fetches products from the **FakeStore API**:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Response**: Array of products with id, title, price, description, category, image, and rating

## Performance Optimizations

1. **Pagination**: Only renders visible products (8 per page)
2. **useCallback**: Prevents unnecessary function recreations
3. **Memoization**: Components don't re-render unless props change
4. **Efficient Filtering**: Filters applied in optimal order

## Future Improvements

1. **Error Boundaries**: Add error boundaries for better error handling
2. **Loading Skeletons**: Show skeleton screens while loading
3. **Product Details**: Add a detail screen for individual products
4. **Shopping Cart**: Implement add-to-cart functionality
5. **User Authentication**: Add login/signup
6. **Backend Sync**: Sync favorites with a backend server
7. **Offline Mode**: Cache products for offline browsing
8. **Performance**: Implement virtualized lists for better performance with large datasets
9. **Accessibility**: Enhance accessibility features (screen reader support)
10. **Internationalization**: Add multi-language support

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

### Test Coverage
- **ProductCard Component**: 
  - Renders product information correctly
  - Displays correct favorite icons
  - Handles favorite button presses
  - Formats prices correctly
  - Truncates long titles

## Troubleshooting

### Issue: Dependencies not installing
**Solution**: Use `npm install --legacy-peer-deps` if you encounter peer dependency conflicts

### Issue: App not starting
**Solution**: Clear cache with `npm start -- --clear` or `expo start --clear`

### Issue: Tests failing
**Solution**: Ensure all dependencies are installed and run `npm test -- --clearCache`

## License

This project is open source and available under the MIT License.

## Author

Created as a React Native take-home assignment demonstrating:
- Clean code architecture
- TypeScript best practices
- React hooks and functional components
- Testing with Jest and React Native Testing Library
- Responsive mobile UI design

