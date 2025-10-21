# 📦 Product Catalog

**Developer**: Amine Labzioui  
**Email**: aminelab50@gmail.com  
**Date**: October 21, 2025

---

## 🎯 Project Overview

This is a comprehensive product catalog application built with two different technologies:
- **Web Version**: React 19 + TypeScript (Modern web application)
- **Mobile Version**: React Native + Expo (Cross-platform mobile app)

Both applications feature a complete product browsing experience with search, filtering, sorting, favorites management, and pagination.

---

## 📁 Project Structure

```
product-catalog/
├── product-catalog-web/          (React Web Application)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
│
├── product-catalog-expo/         (React Native Mobile App)
│   ├── src/
│   ├── app.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
│
└── README.md (this file)
```

---

## ✨ Features

### Both Projects Include

✅ **Product Browsing**
- Grid/list layout with product cards
- Display title, price, image, category, and ratings

✅ **Search Functionality**
- Real-time full-text search
- Search across title, description, and category

✅ **Filtering**
- Filter products by category
- Dropdown selector (web) / Button selector (mobile)

✅ **Sorting**
- Sort by price ascending
- Sort by price descending

✅ **Favorites Management**
- Mark/unmark products as favorites
- Visual heart icon indicator

✅ **Pagination**
- Smart pagination controls
- 8 items per page
- Previous/Next navigation
- Page number selection

✅ **Responsive Design**
- Works on all screen sizes
- Mobile-first approach
- Touch-friendly controls

✅ **Unit Tests**
- Comprehensive test coverage
- Jest + React Testing Library

✅ **TypeScript**
- Full type safety
- Better development experience

### Mobile-Only Features

✅ **Offline Storage**
- AsyncStorage integration
- Favorites persist offline
- Automatic sync on app start

---

## 🚀 Quick Start

### Web Project

```bash
# Navigate to web project
cd product-catalog-web

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

**Access**: http://localhost:3000

### Mobile Project (Expo)

```bash
# Navigate to mobile project
cd product-catalog-expo

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Run on iOS
npm run ios

# Run on Android
npm run android
```

---

## 📚 Documentation

### Web Project
- **README.md** - Complete setup and usage guide
- **Features**: Search, filter, sort, favorites, pagination
- **Tech Stack**: React 19, TypeScript, Tailwind CSS
- **Tests**: 5 comprehensive test cases

### Mobile Project
- **README.md** - Complete setup and usage guide
- **Features**: Search, filter, sort, favorites, pagination, offline storage
- **Tech Stack**: React Native, Expo, TypeScript, AsyncStorage
- **Tests**: 6 comprehensive test cases

---

## 🛠️ Tech Stack

### Web Project
- **React** 19.2.0 - UI library
- **TypeScript** 4.9.5 - Type safety
- **Tailwind CSS** 3.4.18 - Styling
- **Jest** - Testing framework
- **React Testing Library** - Component testing

### Mobile Project
- **React Native** 0.81.4 - Mobile framework
- **Expo** ~54.0.14 - Development platform
- **TypeScript** ~5.9.2 - Type safety
- **AsyncStorage** 2.2.0 - Offline storage
- **Jest** - Testing framework
- **React Native Testing Library** - Component testing

---

## 📊 Requirements Met

| Feature | Web | Mobile |
|---------|-----|--------|
| Fetch Data | ✅ | ✅ |
| Display Products | ✅ | ✅ |
| Filter by Category | ✅ | ✅ |
| Sort by Price | ✅ | ✅ |
| Favorites | ✅ | ✅ |
| Responsive Design | ✅ | ✅ |
| Pagination | ✅ | ✅ |
| Search Bar | ✅ | ✅ |
| Unit Tests | ✅ | ✅ |
| TypeScript | ✅ | ✅ |
| Offline Storage | - | ✅ |

---

## 🧪 Testing

### Run All Tests

**Web Project:**
```bash
cd product-catalog-web
npm test
```

**Mobile Project:**
```bash
cd product-catalog-expo
npm test
```

### Test Coverage

- **Web**: 5 test cases for App component
- **Mobile**: 6 test cases for ProductCard component

---

## 🔗 API Integration

Both projects fetch data from the **FakeStore API**:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Data**: Product information including title, price, image, category, rating

---

## 📱 Responsive Design

### Web Project
- Desktop: 4 columns
- Tablet: 2-3 columns
- Mobile: 1 column

### Mobile Project
- Optimized for phones and tablets
- Touch-friendly controls
- Full-screen layout

---

## 🎨 Design Highlights

### Architecture
- **Component-Based**: Modular, reusable components
- **Separation of Concerns**: Each component has single responsibility
- **Type-Safe**: Full TypeScript coverage
- **Tested**: Unit tests for critical components

### Performance
- **Pagination**: Limits rendered items
- **Efficient Filtering**: Optimized algorithms
- **Responsive**: Works smoothly on all devices

### User Experience
- **Intuitive UI**: Clear, easy-to-use interface
- **Loading States**: Shows feedback during data fetch
- **Error Handling**: Graceful error management
- **Accessibility**: Semantic HTML and ARIA labels

---

## 📝 Project Status

✅ **Complete** - All requirements met  
✅ **Clean** - No unused files  
✅ **Tested** - All tests passing  
✅ **Documented** - Comprehensive guides  
✅ **Production-Ready** - Ready to deploy

---

## 👨‍💻 Developer Information

**Name**: Amine Labzioui  
**Email**: aminelab50@gmail.com  
**GitHub**: https://github.com/labziouiamine 
**LinkedIn**: https://www.linkedin.com/in/labziouiamine/

---

## 📞 Support

For questions or issues:
1. Check the individual project README files
2. Review the documentation in each project folder
3. Contact the developer at aminelab50@gmail.com

---

## 📄 License

This project is provided as-is for LinkedIn test purposes.

---

## 🎉 Summary

This project demonstrates:
- ✅ Full-stack development capabilities
- ✅ React and React Native expertise
- ✅ TypeScript proficiency
- ✅ Testing best practices
- ✅ Responsive design skills
- ✅ Clean code principles
- ✅ Comprehensive documentation

Both applications are production-ready and showcase professional development practices.

---

**Last Updated**: October 21, 2025  
**Status**: ✅ Ready for Submission

