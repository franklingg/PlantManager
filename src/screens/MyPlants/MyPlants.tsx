import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { commonStyle } from '~/styles';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlantSaved } from '~/services/database';
import Loading from '~/components/Loading';
import PlantButton from '~/components/PlantButton';
import { findClosestNotification } from '~/utils/NotificationWorker';
import { countDays, countHours } from '~/utils/TimeFormat';

export default function MyPlants() {
  const navigation = useNavigation();
  const [savedPlants, setSavedPlants] = useState<PlantSaved[]>([]);
  const [nextPlantId, setNextPlantId] = useState<number>();
  const [nextTime, setNextTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@user_plants').then(userPlantsStr => {
      const userPlants: PlantSaved[] = userPlantsStr
        ? JSON.parse(userPlantsStr)
        : [];
      setSavedPlants(userPlants);
      findClosestNotification(setNextPlantId, setNextTime);
      setIsLoading(false);
    });
  }, [savedPlants, nextTime]);

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={commonStyle.heading}>Minhas</Text>
          <Text style={[commonStyle.heading, commonStyle.bold]}>
            Plantinhas
          </Text>
        </View>
        <Image style={styles.image} source={require('~/assets/img/user.png')} />
      </View>
      <View style={styles.waterTips}>
        <Image
          style={styles.waterDrop}
          source={require('~/assets/icons/waterdrop.png')}
        />
        <Text style={styles.waterText}>
          {nextPlantId ? (
            <>
              Regue sua {savedPlants.find(p => p.id === nextPlantId)?.name}{' '}
              {'\n'}
              daqui a{' '}
              {countDays(nextTime) ? `${countDays(nextTime)} dias e ` : ''}
              {countHours(nextTime)} horas.
            </>
          ) : (
            <>Sem plantinhas para regar ainda!</>
          )}
        </Text>
      </View>
      <View>
        <Text style={[commonStyle.title, { textAlign: 'left' }]}>
          Próximas regadas
        </Text>
        {savedPlants.length === 0 ? (
          <Text style={styles.noPlants}>
            Você não cadastrou nenhuma plantinha 😢 {'\n'}
            Mas logo que o fizer ela estará aqui! 😄
          </Text>
        ) : (
          <></>
        )}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={savedPlants}
          renderItem={({ item }) => (
            <PlantButton
              role="sticker"
              plant={item}
              onPress={() => {
                navigation.navigate('PlantRegister', { plant: item });
              }}
            />
          )}
          keyExtractor={item => String(item.id)}
          style={styles.plantsList}
          ListFooterComponent={<View style={{ paddingBottom: 510 }} />}
        />
      </View>
    </SafeAreaView>
  );
}
