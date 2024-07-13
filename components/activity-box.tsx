import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SIZES } from '@/core/constants';
import type { Activity } from '@/core/types';

type ActivityBoxProps = {
  data: Activity | null;
  isLoading?: boolean;
};

export const ActivityBox = ({ data, isLoading = false }: ActivityBoxProps) => {
  if (isLoading) {
    return (
      <View style={styles.box}>
        <Text style={styles.title}>Thinking...</Text>
      </View>
    );
  }

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{data?.activity || '-'}</Text>
      <Text style={styles.type}>Which is "{data?.type}" activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: SIZES.sm,
    paddingVertical: SIZES.xl,
    gap: 8,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.dark,
    borderWidth: 4,
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.dark,
  },
  type: {
    fontSize: SIZES.md,
    textAlign: 'center',
    color: COLORS.paragraph,
  },
});
