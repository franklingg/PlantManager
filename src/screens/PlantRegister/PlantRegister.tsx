import React, { useCallback, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Plant, PlantSaved } from '~/services/database';
import { commonStyle } from '~/styles';
import styles from './styles';
import { SvgUri } from 'react-native-svg';
import Button from '~/components/Button';

type ScreenInfo = {
  plant: Plant;
};

export default function PlantRegister() {
  const navigation = useNavigation();
  const { plant } = useRoute().params as ScreenInfo;
  const [confirmTitle, setConfirmTitle] = useState('');
  const [savedPlants, setSavedPlants] = useState<PlantSaved[]>([]);

  const nextScreen = useCallback(() => {
    const savePlant = async () => {
      const plantToSave: PlantSaved = {
        id: plant.id,
        name: plant.name,
        photo: plant.photo,
        remindTime: '',
      };
      savedPlants.some(saved => saved.id === plant.id)
        ? setSavedPlants(
            savedPlants.map(saved =>
              saved.id === plant.id ? plantToSave : saved,
            ),
          )
        : setSavedPlants([...savedPlants, plantToSave]);
    };

    navigation.navigate('NewPlants');
  }, [navigation]);

  useEffect(() => {
    const readPlants = async () => {
      const userPlantsStr = await AsyncStorage.getItem('@user_plants');
      const userPlants: PlantSaved[] = userPlantsStr
        ? JSON.parse(userPlantsStr)
        : [];
      setSavedPlants(userPlants);
      userPlants.some(saved => saved.id === plant.id)
        ? setConfirmTitle('Confirmar alterações')
        : setConfirmTitle('Cadastrar planta');
    };
    readPlants();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={styles.plantInfo}>
          <SvgUri style={styles.plantImage} uri={plant.photo} />
          <Text style={[commonStyle.heading, commonStyle.bold]}>
            {plant.name}
          </Text>
          <Text style={commonStyle.text}>{plant.about}</Text>
        </View>
        <View style={styles.waterTips}>
          <Image
            style={styles.waterDrop}
            source={require('~/assets/icons/waterdrop.png')}
          />
          <Text style={styles.waterText}>{plant.water_tips}</Text>
        </View>
        <View style={styles.timePicker}>
          <Text style={commonStyle.complement}>
            Escolha o melhor horário para ser lembrado:
          </Text>
        </View>
        <Button onPress={nextScreen}>
          <Text style={commonStyle.buttonText}>{confirmTitle}</Text>
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
