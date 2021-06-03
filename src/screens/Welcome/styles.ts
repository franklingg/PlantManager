import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  image: {
    height: '45%'
  }
});
