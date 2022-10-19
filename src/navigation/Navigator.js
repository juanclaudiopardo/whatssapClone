import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Chat from '../screens/Chat.screen';
import MainTabNavigator from './MainTabNavigator';
import Contacts from '../screens/Contacts.screen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } }}
      >
        <Stack.Screen
          name={'Home'}
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen name={'Chat'} component={Chat} />
        <Stack.Screen name={'Contacts'} component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
