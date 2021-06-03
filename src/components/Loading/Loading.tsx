import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <LottieView
        source={require('~/assets/lottie/plant.json')}
        autoPlay
        loop
        speed={1.3}
        style={styles.loadingView}
      />
    </View>
  );
}
