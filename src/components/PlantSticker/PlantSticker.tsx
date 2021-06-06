import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { PlantSaved } from '~/services/database';
import { commonStyle } from '~/styles';
import styles from './styles';

type CardProps = ViewProps & {
  plant: PlantSaved;
};

export default function PlantSticker({ plant, ...rest }: CardProps) {
  return (
    <View style={styles.container} {...rest}>
      <SvgUri style={styles.plantPhoto} uri={plant.photo} />
      <Text style={commonStyle.text}>{plant.name}</Text>
      <View style={{ flex: 1 }}>
        <Text style={[styles.waterText, commonStyle.light]}>Regar às</Text>
        <Text style={styles.waterText}>00:00</Text>
      </View>
    </View>
  );
}
