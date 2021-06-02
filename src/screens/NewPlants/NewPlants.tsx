import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import commonStyle from '~/styles/common';
import styles from './styles';

export default function NewPlants() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const readStorage = async () => {
      let userName = await AsyncStorage.getItem('@user_name');
      return userName ? userName : '';
    };
    readStorage().then(n => setName(n));
  }, []);

  return isLoading ? (
    <SafeAreaView style={styles.loading}>
      <LottieView
        source={require('~/assets/lottie/plant.json')}
        autoPlay
        loop
        speed={1.75}
        style={styles.loadingView}
      />
    </SafeAreaView>
 ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.lightTitle}>Olá,</Text>
          <Text style={styles.darkTitle}>{name}</Text>
        </View>
        <Image style={styles.image} source={require('~/assets/img/user.png')} />
      </View>
    </SafeAreaView>
  );
}
