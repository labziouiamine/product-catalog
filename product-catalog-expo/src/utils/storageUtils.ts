import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@product_catalog_favorites';

export const saveFavorites = async (favoriteIds: number[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
};

export const loadFavorites = async (): Promise<number[]> => {
  try {
    const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

export const addFavorite = async (
  favoriteIds: number[],
  productId: number
): Promise<number[]> => {
  const updated = [...favoriteIds, productId];
  await saveFavorites(updated);
  return updated;
};

export const removeFavorite = async (
  favoriteIds: number[],
  productId: number
): Promise<number[]> => {
  const updated = favoriteIds.filter((id) => id !== productId);
  await saveFavorites(updated);
  return updated;
};

export const isFavorite = (
  favoriteIds: number[],
  productId: number
): boolean => {
  return favoriteIds.includes(productId);
};

