import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Splash,
  Welcome,
  FirstAccess,
  Success,
} from '~/screens';

import PlantTab from './plantTab';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="FirstAccess"
          component={FirstAccess}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="NewPlants"
          component={PlantTab}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="MyPlants"
          component={PlantTab}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
