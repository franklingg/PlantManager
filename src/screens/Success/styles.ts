import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';
import fonts from '~/styles/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  buttonText:{
    color: colors.white,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.text,
  },
  emoji:{
    height: 96,
    width: 96,
  }
});
