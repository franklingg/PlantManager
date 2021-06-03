import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container:{
    backgroundColor: colors.green,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  textButton: {
    paddingHorizontal: 65
  },
  iconButton: {
    width: 56,
  },
  disabled: {
    opacity: 0.6
  }
});
