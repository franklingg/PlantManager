import { StyleSheet } from 'react-native';
import colors from './colors';
import fonts from './fonts';

export default StyleSheet.create({
  title: {
    fontSize: fonts.size.title,
    color: colors.heading,
    fontFamily: fonts.family.bold,
    textAlign: 'center',
  },
  text: {
    fontSize: fonts.size.text,
    color: colors.text,
    fontFamily: fonts.family.regular,
    textAlign: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.text,
  },
});
