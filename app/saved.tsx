import { useEffect } from 'react';
import { View } from 'react-native';

import { ActivityList } from '@/components/activity-list';
import { useActivitiesStore } from '@/stores/saved-activities';

export default function Saved() {
  const { loadSavedActivities, savedActivities } = useActivitiesStore();

  useEffect(() => {
    loadSavedActivities();
  }, []);

  return (
    <View style={{ padding: 12 }}>
      <ActivityList savedData={savedActivities} />
    </View>
  );
}
