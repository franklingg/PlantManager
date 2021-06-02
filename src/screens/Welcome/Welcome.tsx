import React, { useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import commonStyle from '~/styles/common';
import Watering from '~/assets/img/watering.svg';
import Button from '~/components/Button';

export default function Welcome() {
  const navigation = useNavigation();

  const nextScreen = useCallback( async () => {
    navigation.navigate('FirstAccess');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={commonStyle.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Watering height={styles.image.height} />

      <Text style={commonStyle.text}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button type="icon" onPress={nextScreen}>
        <Feather name="chevron-right" size={30} color={'white'} />
      </Button>
    </SafeAreaView>
  );
}
