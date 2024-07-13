import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import { getRandomActivity } from '@/core/api';
import { ACTIVITY_KEY } from '@/core/constants';
import type { Activity } from '@/core/types';

type StoreState = {
  isLoading: boolean;
  currentActivity: Activity | null;
  savedActivities: Activity[];
  loadCurrentActivity: () => Promise<void>;
  loadSavedActivities: () => Promise<void>;
  addSavedActivity: () => Promise<void>;
  clearSavedActivities: () => Promise<void>;
};

export const useActivitiesStore = create<StoreState>()(set => ({
  isLoading: false,
  currentActivity: null,
  savedActivities: [],
  loadCurrentActivity: async () => {
    set({ isLoading: true });
    try {
      const activity = await getRandomActivity();
      set({ currentActivity: activity });
    } finally {
      set({ isLoading: false });
    }
  },
  loadSavedActivities: async () => {
    const storedActivities = await AsyncStorage.getItem(ACTIVITY_KEY);
    if (storedActivities) {
      set({ savedActivities: JSON.parse(storedActivities) });
    }
  },
  addSavedActivity: async () => {
    set(state => {
      const updatedActivities = [
        state.currentActivity!,
        ...state.savedActivities,
      ];
      AsyncStorage.setItem(ACTIVITY_KEY, JSON.stringify(updatedActivities));
      return { savedActivities: updatedActivities };
    });
  },
  clearSavedActivities: async () => {
    await AsyncStorage.clear();
    set({ savedActivities: [] });
    console.log('Done clearing', new Date());
  },
}));
