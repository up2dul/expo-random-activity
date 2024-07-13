import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { getRandomActivity } from '@/core/api';
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

      <View style={styles.activityContainer}>
        <Text style={styles.activityType}>How about to do this 👇</Text>
        <Text style={styles.activityTitle}>{data?.activity || '-'}</Text>
        <Text style={styles.activityType}>A "{data?.type}" activity</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button onPress={() => fetchHandler()}>✨ Re-generate ✨</Button>
        <Button
          variant="outlined"
          onPress={() => saveHandler()}
        >
          💾 Save this activity 💾
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    gap: 100,
  },
  mainTitle: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  activityContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  activityType: {
    fontSize: 16,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 12,
  },
});
