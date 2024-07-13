import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityBox } from '@/components/activity-box';
import { Button } from '@/components/button';
import { colors, sizes } from '@/core/constants';
import { useActivitiesStore } from '@/stores/saved-activities';

export default function Home() {
  const {
    isLoading,
    currentActivity,
    loadCurrentActivity,
    addSavedActivity,
    clearSavedActivities,
  } = useActivitiesStore();

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
        <Button variant="outlined" onPress={() => clearSavedActivities()}>
          🗑️ Clear all
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: sizes.sm,
    flex: 1,
    backgroundColor: colors.light,
    color: colors.dark,
  },
  mainTitle: {
    fontSize: sizes.md,
    fontWeight: 'semibold',
  },
  activitySection: {
    flex: 1,
    justifyContent: 'center',
    gap: sizes.md,
  },
  activitySectionTitle: {
    fontSize: sizes.md,
    textAlign: 'center',
  },
  actionsSection: {
    flex: 1,
    flexDirection: 'column',
    gap: sizes.sm,
  },
});
