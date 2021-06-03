import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Plant } from '~/services/database';
import { commonStyle } from '~/styles';
import styles from './styles';

export default function PlantRegister() {
  const navigation = useNavigation();
  const { plant } = useRoute().params as { plant: Plant };

  const nextScreen = useCallback(() => {
    navigation.navigate('NewPlants');
  }, [navigation]);

  // useEffect(() => {
  // const readStorage = async () => {
  //   const userName = await AsyncStorage.getItem('@user_name');
  //   setName(userName || '');
  // };

  // readStorage();
  // }, []);

  return <SafeAreaView style={styles.container}>
    <Text>REGISTER {plant.name}</Text>
  </SafeAreaView>;
}
