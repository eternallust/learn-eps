// Note: AsyncStorage import akan disesuaikan saat ada dependency
// import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage keys for the application
 */
export const STORAGE_KEYS = {
  USER_PROFILE: "@eps_user_profile",
  QUIZ_PROGRESS: "@eps_quiz_progress",
  LESSON_PROGRESS: "@eps_lesson_progress",
  APP_SETTINGS: "@eps_app_settings",
} as const;

/**
 * Generic storage operations
 */
export const StorageHelper = {
  /**
   * Save data to storage
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      // Uncomment when AsyncStorage is available
      // await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(`Saved ${key}:`, value);
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
      throw error;
    }
  },

  /**
   * Get data from storage
   */
  async getItem<T>(key: string): Promise<T | null> {
    try {
      // Uncomment when AsyncStorage is available
      // const item = await AsyncStorage.getItem(key);
      // return item ? JSON.parse(item) : null;
      console.log(`Getting ${key} from storage`);
      return null;
    } catch (error) {
      console.error(`Error getting ${key}:`, error);
      return null;
    }
  },

  /**
   * Remove data from storage
   */
  async removeItem(key: string): Promise<void> {
    try {
      // Uncomment when AsyncStorage is available
      // await AsyncStorage.removeItem(key);
      console.log(`Removed ${key} from storage`);
    } catch (error) {
      console.error(`Error removing ${key}:`, error);
      throw error;
    }
  },

  /**
   * Clear all app data
   */
  async clearAll(): Promise<void> {
    try {
      const keys = Object.values(STORAGE_KEYS);
      // Uncomment when AsyncStorage is available
      // await AsyncStorage.multiRemove(keys);
      console.log("Cleared all app data");
    } catch (error) {
      console.error("Error clearing app data:", error);
      throw error;
    }
  },
};
