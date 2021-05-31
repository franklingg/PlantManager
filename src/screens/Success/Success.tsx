import React, { useCallback } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import commonStyle from '~/styles/common';
import styles from './styles';
import Button from '~/components/Button';

export default function Success() {
  const navigation = useNavigation();

  const nextScreen = useCallback(() => {
    navigation.navigate('Welcome');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>😄</Text>
      <View>
        <Text style={commonStyle.title}>Prontinho</Text>
        <Text style={commonStyle.text}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
      </View>
      <Button onPress={nextScreen}>
        <Text style={commonStyle.buttonText}>Começar</Text>
      </Button>
    </SafeAreaView>
  );
}
