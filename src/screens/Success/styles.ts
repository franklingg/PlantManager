import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    paddingTop: '15%',
    paddingBottom: '45%',
    paddingHorizontal: 32,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  emoji:{
    fontSize: 96
  }
});
