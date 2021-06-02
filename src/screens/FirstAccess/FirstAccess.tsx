import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import commonStyle from '~/styles/common';
import styles from './styles';
import Button from '~/components/Button';

export default function FirstAcess() {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const nextScreen = useCallback(async () => {
    await AsyncStorage.setItem('@user_name', name.trim());
    const successInfo = {
      title: 'Prontinho!',
      subtitle:
        'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
      buttonText: 'Começar',
    };
    navigation.navigate('Success', successInfo);
  }, [name]);

  useEffect(()=>{
    const subscription = Keyboard.addListener(
      'keyboardDidHide',
      Keyboard.dismiss,
    );
    return (()=>{
      Keyboard.removeSubscription(subscription);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.emoji}>😃</Text>
            <Text style={[commonStyle.title, { marginBottom: 40 }]}>
              Como podemos {'\n'}
              chamar você?
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite um nome"
              value={name}
              onChangeText={setName}
            />

            <Button disabled={!name || false} onPress={nextScreen}>
              <Text style={commonStyle.buttonText}>Confirmar</Text>
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
