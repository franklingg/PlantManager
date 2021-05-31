import React, { useState, useCallback } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import commonStyle from '~/styles/common';
import styles from './styles';
import Button from '~/components/Button';

export default function FirstAcess() {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const nextScreen = useCallback(async () => {
    await AsyncStorage.setItem('@user_name', name);
    navigation.navigate('Success');
  }, [setName]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={commonStyle.title}>
        😃 {'\n'}
        Como podemos {'\n'}
        chamar você?
      </Text>

      <TextInput
        placeholder="Digite um nome"
        value={name}
        onChangeText={setName}
      />

      <Button disabled={!name || false} onPress={nextScreen}>
        <Text style={commonStyle.buttonText}>Confirmar</Text>
      </Button>
    </SafeAreaView>
  );
}
