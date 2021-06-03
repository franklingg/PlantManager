import { StyleSheet } from 'react-native';
import { fonts, colors } from '~/styles';

export default StyleSheet.create({
  container:{
    backgroundColor: colors.shape,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 80,
    marginRight: 4,
  },
  buttonText:{
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.complement,
    color: colors.heading,
  },
  active:{
    backgroundColor: colors.green_light,
  }
});
