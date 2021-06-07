import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import {
  createNativeWrapper,
  RectButton,
  RectButtonProps,
  Swipeable,
} from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import { SvgUri } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import { Plant, PlantSaved } from '~/services/database';
import { colors, commonStyle } from '~/styles';
import {
  deleteNotification,
  setNextNotificationTime,
} from '~/utils/NotificationWorker';
import styles from './styles';

type PlantButton = RectButtonProps & {
  role: 'card' | 'sticker';
  plant: Plant;
};

export default function PlantButton({ plant, role, ...rest }: PlantButton) {
  const modalRef = useRef<Modal>();
  const [waterTime, setWaterTime] = useState<string>('00:00');
  const [waterDay, setWaterDay] = useState<string>('');

  const handleRight = useCallback(() => {
    return (
      <RectButton
        style={styles.trashButton}
        onPress={() => {
          modalRef.current?.open();
        }}>
        <Feather name="trash" size={24} color={colors.white} />
      </RectButton>
    );
  }, [modalRef]);

  const deletePlant = useCallback(() => {
    AsyncStorage.getItem('@user_plants').then(userPlantsStr => {
      const userPlants: PlantSaved[] = userPlantsStr
        ? JSON.parse(userPlantsStr)
        : [];
      const searchedIdx = userPlants.findIndex(saved => {
        return saved.id === plant.id;
      });
      const removedPlantId = userPlants[searchedIdx].id;
      userPlants.splice(searchedIdx, 1);
      AsyncStorage.setItem('@user_plants', JSON.stringify(userPlants)).then(
        () => {
          deleteNotification(removedPlantId);
          modalRef.current?.close();
        },
      );
    });
  }, [modalRef, plant]);

  useEffect(() => {
    setNextNotificationTime(plant.id, setWaterTime, setWaterDay);
  }, [plant.id, setWaterTime]);

  return (
    <>
      <Modal
        ref={modalRef}
        entry="top"
        coverScreen
        backButtonClose
        backdrop
        style={styles.modal}>
        <SvgUri style={styles.modalPhoto} uri={plant.photo} />
        <Text style={commonStyle.text}>
          Deseja mesmo deletar sua {'\n'}
          <Text style={commonStyle.bold}>{plant.name}</Text>?
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.modalBtn}
            onPress={() => {
              modalRef.current?.close();
            }}>
            <Text style={styles.modalBtnText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.modalBtn}
            onPress={deletePlant}>
            <Text style={[styles.modalBtnText, { color: colors.red }]}>
              Deletar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {role === 'sticker' ? (
        <Swipeable
          renderRightActions={handleRight}
          overshootRight={false}
          {...rest}>
          <RectButton style={styles.container} {...rest}>
            <SvgUri style={styles.plantPhoto} uri={plant.photo} />
            <Text style={commonStyle.text}>{plant.name}</Text>
            <View style={{ flex: 1 }}>
              <Text style={[styles.waterText, commonStyle.light]}>
                Regar às
              </Text>
              <Text style={styles.waterText}>{waterTime}</Text>
              {plant.frequency.repeat_every === 'week' ? (
                <Text style={styles.waterText}>{waterDay}</Text>
              ) : (
                <></>
              )}
            </View>
          </RectButton>
        </Swipeable>
      ) : (
        <RectButton style={styles.cardContainer} {...rest}>
          <SvgUri style={styles.cardPlantPhoto} uri={plant.photo} />
          <Text style={styles.cardPlantName}>{plant.name}</Text>
        </RectButton>
      )}
    </>
  );
}
