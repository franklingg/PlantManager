import React, { useCallback } from 'react';
import { SwipeableListViewProps, Text, View } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Modal from 'react-native-modalbox';
import { SvgUri } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import { PlantSaved } from '~/services/database';
import { colors, commonStyle } from '~/styles';
import styles from './styles';

type CardProps = SwipeableListViewProps & {
  plant: PlantSaved;
  handleDelete: () => void;
};

export default function PlantSticker({ plant, ...rest }: CardProps) {
  const handleRight = useCallback(() => {
    return (
      <RectButton style={styles.trashButton} onPress={openAlert}>
        <Feather name="trash" size={24} color={colors.white} />
      </RectButton>
    );
  }, []);

  return (
    <>
      <Modal />
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
