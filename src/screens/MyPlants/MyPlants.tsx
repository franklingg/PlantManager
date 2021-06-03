import React, { useCallback } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { commonStyle } from '~/styles';
import styles from './styles';

export default function MyPlants() {
  const navigation = useNavigation();

  const nextScreen = useCallback(() => {
    navigation.navigate('Welcome');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>My plants</Text>
    </SafeAreaView>
  );
}
