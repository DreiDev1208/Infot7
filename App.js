import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AssetTransfer from './components/AssetTransfer';
import AssetInventory from './components/AssetInventory';
import AssetAllocation from './components/AssetAllocation';
import AssetRegistration from './components/AssetRegistration';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssetTransfer"
          component={AssetTransfer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssetInventory"
          component={AssetInventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssetAllocation"
          component={AssetAllocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssetRegistration"
          component={AssetRegistration}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
