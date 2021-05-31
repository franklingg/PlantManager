import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, []);
  
  return (
    <View style={styles.background}>
      <Text>Confirmed</Text>
    </View>
  );
}
