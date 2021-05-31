import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

//import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  //const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background}>
        <Text>
          Welcome page
        </Text>
    </SafeAreaView>
  );
};
