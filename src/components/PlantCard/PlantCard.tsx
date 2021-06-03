import React from 'react';
import { Text, Image } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import { Plant } from '~/services/database';
import styles from './styles';

type CardProps = RectButtonProperties & {
  plant: Plant;
};

export default function PlantCard(props: CardProps) {
  return (
    <RectButton style={styles.container} {...props}>
      <SvgUri style={styles.plantPhoto} uri={props.plant.photo} />
      <Text style={styles.plantName}>{props.plant.name}</Text>
    </RectButton>
  );
}
