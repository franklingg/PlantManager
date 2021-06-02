import React, { useCallback } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import commonStyle from '~/styles/common';
import styles from './styles';
import Button from '~/components/Button';

interface Info {
  title: string,
  subtitle: string,
  buttonText: string,
};

export default function Success() {
  const navigation = useNavigation();
  const { title, subtitle, buttonText } = useRoute().params as Info;

  const nextScreen = useCallback(() => {
    navigation.navigate('NewPlants');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}> 😄 </Text>
      <View>
        <Text style={commonStyle.title}>
          {title}
          {'\n'}
        </Text>
        <Text style={commonStyle.text}>
          {subtitle}
          {'\n'}
        </Text>
      </View>
      <Button onPress={nextScreen}>
        <Text style={commonStyle.buttonText}>{buttonText}</Text>
      </Button>
    </SafeAreaView>
  );
}
