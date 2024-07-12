import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Data {
  activity: string,
  type: string,
  participants: number,
  price: number,
  link: string,
  key: string,
  accessibility: 0.3
}

const App = () => {
  const [data, setData] = useState<Data>();
  const [savedData, setSavedData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const jsonData: Data = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }: { item: Data }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.activity}</Text>
    </View>
  );

  return (
    <View>
      <Text style={{
        fontSize: 22,
        padding: 20,
      }}>Random Activity</Text>
      <Pressable
        style={{
            padding: 10,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            width: 200,
          }}
        onPress={() => {
          fetchData();
        }}
      >
        <Text>
          Refresh
        </Text>
      </Pressable>
      <View style={{
        padding: 12,
      }}>
        <Text>{data?.activity || '-'}</Text>
        <Text>({data?.type})</Text>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            width: 200,
          }}
          onPress={() => {
            console.log('test')
            setSavedData([...savedData, data])
          }}
        >
          <Text>Save</Text>
        </Pressable>
      </View>
      <View style={{ padding: 12 }}>
        <Text>Saved Data:</Text>
        {savedData.map(data => (
          <Text>{data.activity}</Text>
        ))}
      </View>
    </View>
  );
};

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

export default App;