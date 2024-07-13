import { StyleSheet, Text, View } from 'react-native';

import type { Activity } from '@/core/types';

export const ActivityItem = ({ item }: { item: Activity }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item.activity}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
  },
});
