import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FilterState } from '../types/Product';

interface FilterBarProps {
  filters: FilterState;
  categories: string[];
  onSearchChange: (text: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: 'none' | 'asc' | 'desc') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={filters.searchTerm}
        onChangeText={onSearchChange}
        placeholderTextColor="#999"
      />

      {/* Category Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            filters.selectedCategory === 'all' && styles.categoryButtonActive,
          ]}
          onPress={() => onCategoryChange('all')}
        >
          <Text
            style={[
              styles.categoryButtonText,
              filters.selectedCategory === 'all' &&
                styles.categoryButtonTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              filters.selectedCategory === category &&
                styles.categoryButtonActive,
            ]}
            onPress={() => onCategoryChange(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                filters.selectedCategory === category &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Sort Options */}
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by Price:</Text>
        <View style={styles.sortButtons}>
          {(['none', 'asc', 'desc'] as const).map((sort) => (
            <TouchableOpacity
              key={sort}
              style={[
                styles.sortButton,
                filters.sortOrder === sort && styles.sortButtonActive,
              ]}
              onPress={() => onSortChange(sort)}
            >
              <Text
                style={[
                  styles.sortButtonText,
                  filters.sortOrder === sort && styles.sortButtonTextActive,
                ]}
              >
                {sort === 'none' ? 'None' : sort === 'asc' ? 'Low→High' : 'High→Low'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
    color: '#333',
  },
  categoryScroll: {
    marginBottom: 12,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#3498db',
  },
  categoryButtonText: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
  categoryButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  sortButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  sortButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sortButtonActive: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  sortButtonText: {
    fontSize: 11,
    color: '#666',
  },
  sortButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default FilterBar;

