import React, { useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from '~/assets/img/logo.svg';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('@user_name').then(userName => {
      setTimeout(() => {
        navigation.navigate(userName ? 'NewPlants' : 'Welcome');
      }, 2000);
    });
  }, []);

  return (
    <View style={styles.background}>
      <Logo />
    </View>
  );
}
