import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityList } from '@/components/activity-list';
import { Button } from '@/components/button';
import { COLORS, SIZES } from '@/core/constants';
import { useActivitiesStore } from '@/stores/saved-activities';

export default function Saved() {
  const { loadSavedActivities, clearSavedActivities, savedActivities } =
    useActivitiesStore();

  useEffect(() => {
    loadSavedActivities();
  }, [savedActivities, loadSavedActivities]);

  return (
    <View style={styles.container}>
      {savedActivities.length > 0 ? (
        <>
          <View style={styles.clearAllButtonContainer}>
            <Button variant="danger" onPress={() => clearSavedActivities()}>
              🗑️ Clear all
            </Button>
          </View>

          <Text style={styles.savedActivitiesTitle}>
            Showing {savedActivities.length} saved activities
          </Text>

          <ActivityList savedData={savedActivities} />
        </>
      ) : (
        <View style={styles.noSavedActivities}>
          <Text>No saved activities yet</Text>
        </View>
      )}
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
  savedActivitiesTitle: {
    marginBottom: SIZES.sm,
    fontSize: SIZES.md,
  },
  noSavedActivities: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearAllButtonContainer: {
    padding: SIZES.sm,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: COLORS.light,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
