import { StyleSheet, Text, View } from 'react-native';

import { colors, sizes } from '@/core/constants';
import type { Activity } from '@/core/types';

export const ActivityBox = ({ data }: { data: Activity | null }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{data?.activity || '-'}</Text>
      <Text style={styles.type}>Which is "{data?.type}" activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: sizes.sm,
    paddingVertical: sizes.xl,
    gap: 8,
    backgroundColor: colors.primary,
    borderColor: colors.dark,
    borderWidth: 4,
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  title: {
    fontSize: sizes.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.dark,
  },
  type: {
    fontSize: sizes.md,
    textAlign: 'center',
    color: colors.paragraph,
  },
});
