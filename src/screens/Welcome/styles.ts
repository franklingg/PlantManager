import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';
import fonts from '~/styles/fonts';

export default StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: fonts.size.title,
    color: colors.heading,
    fontFamily: fonts.family.bold,
    textAlign: 'center',
  },
  text:{
    fontSize: fonts.size.text,
    color: colors.text,
    fontFamily: fonts.family.regular,
    textAlign: 'center',
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    borderRadius: 4,
  }
});
