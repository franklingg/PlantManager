import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Environment,
  getEnvironments,
  getPlants,
  Plant,
} from '~/services/database';
import { commonStyle } from '~/styles';
import styles from './styles';
import Loading from '~/components/Loading';
import PlantsView from '~/components/PlantsView';

export default function NewPlants() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [environments, setEnvironments] = useState<Environment[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const plantRegister = useCallback(
    (p: Plant) => {
      navigation.navigate('PlantRegister', { plant: p });
    },
    [navigation],
  );

  useEffect(() => {
    const readStorage = async () => {
      const userName = await AsyncStorage.getItem('@user_name');
      setName(userName || '');
    };
    const readDatabase = async () => {
      const loadedEnvs = await getEnvironments();
      const loadedPlants = await getPlants();
      setEnvironments(loadedEnvs);
      setPlants(loadedPlants);
    };
    setIsLoading(true);
    readStorage();
    readDatabase();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={commonStyle.heading}>Olá,</Text>
          <Text style={[commonStyle.heading, commonStyle.bold]}>{name}</Text>
        </View>
        <Image style={styles.image} source={require('~/assets/img/user.png')} />
      </View>
      <PlantsView
        environments={environments}
        plants={plants}
        plantClick={plantRegister}
      />
    </SafeAreaView>
  );
}
