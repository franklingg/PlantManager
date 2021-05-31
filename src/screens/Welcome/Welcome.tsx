import React, { useCallback } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import Watering from '~/assets/img/watering.svg';

export default function Welcome() {
  const navigation = useNavigation();

  const nextScreen = useCallback(() => {
    navigation.navigate('Confirmation');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Watering />

      <Text style={styles.text}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity onPress={nextScreen} style={styles.button}>
        <Feather name="chevron-right" size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
