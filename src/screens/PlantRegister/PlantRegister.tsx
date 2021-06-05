import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import { SvgUri } from 'react-native-svg';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import Button from '~/components/Button';
import { Plant, PlantSaved } from '~/services/database';
import WeekdayPicker from '~/components/WeekdayPicker';
import { getTime } from '~/utils/TimeFormat';
import { colors, commonStyle } from '~/styles';
import styles from './styles';

type ScreenInfo = {
  plant: Plant;
};

export default function PlantRegister() {
  const navigation = useNavigation();
  const { plant } = useRoute().params as ScreenInfo;
  const [confirmTitle, setConfirmTitle] = useState('');
  const [savedPlants, setSavedPlants] = useState<PlantSaved[]>([]);

  //choose time
  const [isWeekly, setIsWeekly] = useState(
    plant.frequency.repeat_every === 'week',
  );
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

  const handleChangeTime = useCallback((event: Event, dateTime?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(old => !old);
    }
    setSelectedTime(old => dateTime || old);
  }, []);

  const nextScreen = useCallback(() => {
    const savePlant = async () => {
      const plantToSave: PlantSaved = {
        id: plant.id,
        name: plant.name,
        photo: plant.photo,
        remindTime: selectedTime,
        remindDay: selectedDay,
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
  }, []);

  useEffect(() => {
    const readPlants = async () => {
      const userPlantsStr = await AsyncStorage.getItem('@user_plants');
      const userPlants: PlantSaved[] = userPlantsStr
        ? JSON.parse(userPlantsStr)
        : [];
      setSavedPlants(userPlants);
      userPlants.forEach(saved => {
        if (saved.id === plant.id) {
          setConfirmTitle('Confirmar alterações');
          setSelectedDay(saved.remindDay);
          setSelectedTime(saved.remindTime);
        }
      });
      setConfirmTitle(confirmTitle || 'Cadastrar planta');
    };
    readPlants();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RectButton
        style={styles.returnButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Feather name="chevron-left" size={24} color={colors.heading} />
      </RectButton>
      <SafeAreaView>
        <View style={styles.plantInfo}>
          <SvgUri style={styles.plantImage} uri={plant.photo} />
          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={commonStyle.text}>{plant.about}</Text>
        </View>
        <View style={styles.waterTips}>
          <Image
            style={styles.waterDrop}
            source={require('~/assets/icons/waterdrop.png')}
          />
          <Text style={styles.waterText}>{plant.water_tips}</Text>
        </View>
        <View>
          <Text style={commonStyle.complement}>
            Escolha o melhor {isWeekly && 'dia e '}horário para ser lembrado:
          </Text>
          <View style={styles.timePicker}>
            {isWeekly && (
              <WeekdayPicker day={selectedDay} setDay={setSelectedDay} />
            )}
            {Platform.OS === 'android' && (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setShowPicker(!showPicker);
                }}
                style={[
                  styles.timeButton,
                  isWeekly ? {} : styles.timeButtonAlone,
                ]}>
                <Text style={commonStyle.complement}>
                  {getTime(selectedTime)}
                </Text>
              </TouchableOpacity>
            )}
            {showPicker && (
              <RNDateTimePicker
                value={selectedTime}
                mode="time"
                display="spinner"
                onChange={handleChangeTime}
                is24Hour
              />
            )}
          </View>
        </View>
        <Button onPress={nextScreen}>
          <Text style={commonStyle.buttonText}>{confirmTitle}</Text>
        </Button>
      </SafeAreaView>
    </ScrollView>
  );
}
