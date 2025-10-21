# Product Catalog - React Web App

A responsive product catalog web application built with React, TypeScript, and Tailwind CSS. Features product browsing, filtering, sorting, search, and favorites management.

## ✨ Features

### Core Features ✅
- **Product Display**: Browse products in a responsive grid layout
- **Search**: Real-time full-text search across title, description, and category
- **Category Filtering**: Filter products by category with dropdown selector
- **Price Sorting**: Sort products by price (ascending/descending)
- **Favorites**: Mark/unmark products as favorites with visual indicator
- **Pagination**: Navigate through products with smart pagination controls
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Bonus Features ✅
- **Unit Tests**: Comprehensive tests for components
- **TypeScript**: Full type safety throughout the application
- **Clean Code**: Modular, reusable components

## 🛠️ Tech Stack

- **React** 19.2.0
- **TypeScript** 4.9.5
- **Tailwind CSS** 3.4.18
- **React Scripts** 5.0.1
- **Testing Library** (Jest, React Testing Library)

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductCard.tsx      # Individual product card component
│   └── ProductList.tsx      # Product list container
├── types/
│   └── Product.tsx          # TypeScript interfaces
├── App.tsx                  # Main application component
├── App.test.tsx             # Component tests
├── index.tsx                # React entry point
├── index.css                # Global styles
└── setupTests.ts            # Test configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory**
   ```bash
   cd product-catalog-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - The app will automatically open at `http://localhost:3000`

## 📝 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Eject configuration (one-way operation)
npm run eject
```

## 🎯 How to Use

1. **Browse Products**: The app loads all products from the FakeStore API on startup
2. **Search**: Type in the search box to filter products by title, description, or category
3. **Filter by Category**: Use the category dropdown to filter products
4. **Sort by Price**: Select ascending or descending to sort by price
5. **Mark Favorites**: Click the heart icon on any product to add/remove from favorites
6. **Navigate Pages**: Use pagination controls to browse through products (2 per page)

## 🔌 API Integration

- **API**: FakeStore API (`https://fakestoreapi.com/products`)
- **Endpoint**: Fetches all products on app load
- **Response**: Array of products with id, title, price, description, category, image, and rating

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Test Coverage
- **App Component**: Tests for rendering, loading states, and UI elements
- **ProductCard Component**: Tests for product display and interactions
- **ProductList Component**: Tests for list rendering

## 🎨 Design Decisions

### 1. Component Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusable Components**: ProductCard and ProductList are independent
- **Props-based Communication**: Components receive data and callbacks via props

### 2. State Management
- **Local State**: Used React hooks (useState, useEffect) for simplicity
- **No Redux**: Kept it simple for this assignment
- **Efficient Updates**: State updates trigger re-renders only when necessary

### 3. Styling
- **Tailwind CSS**: Used for rapid UI development and responsive design
- **Utility-first**: Leverages Tailwind's utility classes for consistent styling
- **Responsive**: Mobile-first approach with breakpoints for different screen sizes

### 4. Data Fetching
- **Fetch API**: Used native fetch for API calls
- **Error Handling**: Basic error logging with user-facing loading states
- **Loading States**: Shows loading indicator while fetching data

### 5. Filtering & Sorting
- **Efficient Algorithm**: Filters applied in sequence (category → search → sort)
- **Immutable Updates**: Always creates new arrays to avoid mutation issues
- **Real-time Updates**: Filters update instantly as user types

### 6. Pagination
- **Smart Display**: Shows page numbers with ellipsis for large page counts
- **User-Friendly**: Previous/Next buttons with disabled states
- **Reset on Filter**: Pagination resets to page 1 when filters change

## 📱 Responsive Design

The app is fully responsive and works on:
- **Desktop**: Full-width layout with 4 columns
- **Tablet**: 2-3 columns depending on screen size
- **Mobile**: Single column layout with touch-friendly controls

## 🚀 Performance Optimizations

1. **Pagination**: Only renders 2 products per page
2. **Efficient Filtering**: Optimized filter algorithm
3. **Memoization**: Components don't re-render unless props change
4. **Lazy Loading**: Products loaded on demand

## 🔐 Security

- ✅ No sensitive data stored
- ✅ API calls use HTTPS
- ✅ Input validation on search
- ✅ XSS protection with React's built-in escaping

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
**Solution**:
```bash
npm start -- --port 3001
```

### Issue: Dependencies not installing
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tests failing
**Solution**:
```bash
npm test -- --clearCache
```

## 📈 Future Improvements

1. **Error Boundaries**: Add error boundaries for better error handling
2. **Loading Skeletons**: Show skeleton screens while loading
3. **Product Details**: Add a detail page for individual products
4. **Shopping Cart**: Implement add-to-cart functionality
5. **User Authentication**: Add login/signup
6. **Backend Integration**: Connect to a real backend API
7. **Favorites Persistence**: Save favorites to localStorage or backend
8. **Infinite Scroll**: Replace pagination with infinite scroll
9. **Accessibility**: Enhance accessibility features
10. **Performance**: Implement code splitting and lazy loading

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a React take-home assignment demonstrating:
- React hooks and functional components
- TypeScript best practices
- Responsive design with Tailwind CSS
- Component testing with Jest and React Testing Library
- Clean code architecture

