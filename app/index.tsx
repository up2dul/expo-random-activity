import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ActivityBox } from '@/components/activity-box';
import { Button } from '@/components/button';
import { getRandomActivity } from '@/core/api';
import { colors, sizes } from '@/core/constants';
import type { Activity } from '@/core/types';

export default function Home() {
  const [data, setData] = useState<Activity | null>(null);
  const [savedData, setSavedData] = useState<Activity[]>([]);

  useEffect(() => {
    fetchHandler();
  }, []);

  const fetchHandler = async () => {
    const newData = await getRandomActivity();
    setData(newData);
  };

  const saveHandler = () => {
    if (!data) return;
    setSavedData([data, ...savedData]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>
          🚴🏻‍♂️ Need a random activity to do? here it is!
        </Text>
      </View>

      <View style={styles.activitySection}>
        <Text style={styles.activitySectionTitle}>How about to do this 👇</Text>
        <ActivityBox data={data} />
      </View>

      <View style={styles.actionsSection}>
        <Button onPress={() => fetchHandler()}>✨ Re-generate ✨</Button>
        <Button variant="outlined" onPress={() => saveHandler()}>
          💾 Save this activity 💾
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
