import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useRef } from 'react';
import { TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import { SvgUri } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import { PlantSaved } from '~/services/database';
import { colors, commonStyle } from '~/styles';
import styles from './styles';

type CardProps = Swipeable & {
  plant: PlantSaved;
};

export default function PlantSticker({ plant, ...rest }: CardProps) {
  const modalRef = useRef<Modal>();

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
      userPlants.splice(searchedIdx, 1);
      AsyncStorage.setItem('@user_plants', JSON.stringify(userPlants)).then(
        () => {
          
          modalRef.current?.close();
        },
      );
    });
  }, [modalRef, plant]);

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
      <Swipeable
        renderRightActions={handleRight}
        overshootRight={false}
        childrenContainerStyle={styles.container}
        {...rest}>
        <SvgUri style={styles.plantPhoto} uri={plant.photo} />
        <Text style={commonStyle.text}>{plant.name}</Text>
        <View style={{ flex: 1 }}>
          <Text style={[styles.waterText, commonStyle.light]}>Regar às</Text>
          <Text style={styles.waterText}>00:00</Text>
        </View>
      </Swipeable>
    </>
  );
}
