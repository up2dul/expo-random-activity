import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SIZES } from '@/core/constants';
import type { Activity } from '@/core/types';

export const ActivityItem = ({ item }: { item: Activity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.activity}</Text>
      <Text style={styles.subtitle}>{item.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.sm,
    borderRadius: 4,
    marginBottom: SIZES.md,
  },
  title: {
    fontSize: SIZES.md,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  subtitle: {
    fontSize: SIZES.sm,
    color: COLORS.paragraph,
  },
});
