import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityBox } from '@/components/activity-box';
import { Button } from '@/components/button';
import { COLORS, SIZES } from '@/core/constants';
import { useActivitiesStore } from '@/stores/saved-activities';

export default function Home() {
  const { isLoading, currentActivity, loadCurrentActivity, addSavedActivity } =
    useActivitiesStore();

  useEffect(() => {
    loadCurrentActivity();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>
          😴 Imagine you have no idea what to do today.
        </Text>
        <Text style={styles.mainTitle}>
          🎲 Let's generate a random activity for you!
        </Text>
      </View>

      <View style={styles.activitySection}>
        <Text style={styles.activitySectionTitle}>
          {isLoading
            ? null
            : currentActivity === null
              ? 'Hit the Re-generate button'
              : 'How about to do this? 👇'}
        </Text>
        <ActivityBox data={currentActivity} isLoading={isLoading} />
      </View>

      <View style={styles.actionsSection}>
        <Button isLoading={isLoading} onPress={() => loadCurrentActivity()}>
          🎲 Re-generate
        </Button>
        <Button variant="outlined" onPress={() => addSavedActivity()}>
          💾 Save this activity
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.sm,
    flex: 1,
    backgroundColor: COLORS.light,
    color: COLORS.dark,
  },
  mainTitle: {
    fontSize: SIZES.md,
    fontWeight: 'semibold',
  },
  activitySection: {
    flex: 1,
    justifyContent: 'center',
    gap: SIZES.md,
  },
  activitySectionTitle: {
    fontSize: SIZES.md,
    textAlign: 'center',
  },
  actionsSection: {
    flex: 1,
    flexDirection: 'column',
    gap: SIZES.sm,
  },
});
