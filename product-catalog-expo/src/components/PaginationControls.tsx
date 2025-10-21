import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  totalProducts,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page
      pages.push(1);

      // Show ellipsis if needed
      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.navButton,
          currentPage === 1 && styles.navButtonDisabled,
        ]}
        onPress={handlePrevious}
        disabled={currentPage === 1}
      >
        <Text
          style={[
            styles.navButtonText,
            currentPage === 1 && styles.navButtonTextDisabled,
          ]}
        >
          ← Prev
        </Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.pagesScroll}
      >
        {pageNumbers.map((page, index) => (
          <TouchableOpacity
            key={`${page}-${index}`}
            style={[
              styles.pageButton,
              page === currentPage && styles.pageButtonActive,
              page === '...' && styles.pageButtonEllipsis,
            ]}
            onPress={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
          >
            <Text
              style={[
                styles.pageButtonText,
                page === currentPage && styles.pageButtonTextActive,
              ]}
            >
              {page}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.navButton,
          currentPage === totalPages && styles.navButtonDisabled,
        ]}
        onPress={handleNext}
        disabled={currentPage === totalPages}
      >
        <Text
          style={[
            styles.navButtonText,
            currentPage === totalPages && styles.navButtonTextDisabled,
          ]}
        >
          Next →
        </Text>
      </TouchableOpacity>

      <Text style={styles.pageInfo}>
        {currentPage} / {totalPages}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 8,
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#3498db',
    borderRadius: 6,
  },
  navButtonDisabled: {
    backgroundColor: '#ddd',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  navButtonTextDisabled: {
    color: '#999',
  },
  pagesScroll: {
    flex: 1,
  },
  pageButton: {
    width: 36,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  pageButtonActive: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  pageButtonEllipsis: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  pageButtonText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  pageButtonTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  pageInfo: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    minWidth: 40,
    textAlign: 'right',
  },
});

export default PaginationControls;

