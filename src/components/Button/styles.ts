import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  textButton: {
    backgroundColor: colors.green,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50
  },
  iconButton: {
    backgroundColor: colors.green,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
};
