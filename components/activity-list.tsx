import { FlatList } from 'react-native';

import { ActivityItem } from '@/components/activity-item';
import type { Activity } from '@/core/types';

export const ActivityList = ({ savedData }: { savedData: Activity[] }) => (
  <FlatList
    data={savedData}
    renderItem={({ item }) => <ActivityItem item={item} />}
  />
);
