import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NewPlants, MyPlants } from '~/screens';
import { colors, fonts } from '~/styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: { height: 88 },
        labelStyle: {
          fontSize: fonts.size.complement,
          fontFamily: fonts.family.regular
        },
      }}>
      <Tab.Screen
        name="NewPlants"
        component={NewPlants}
        options={{
          title: 'Nova Planta',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPlants"
        component={MyPlants}
        options={{
          title: 'Minhas Plantinhas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
