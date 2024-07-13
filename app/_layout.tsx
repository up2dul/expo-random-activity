import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Activity',
            title: 'Activity generator',
          }}
        />
        <Drawer.Screen
          name="saved"
          options={{
            drawerLabel: 'Saved Activities',
            title: 'Your saved activities',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
