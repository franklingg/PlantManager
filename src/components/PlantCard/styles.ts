import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container:{
    backgroundColor: colors.shape,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 12,
    padding: 5,
    maxWidth: 148,
    maxHeight: 160,
  },
  plantPhoto:{
    maxWidth: '100%',
    maxHeight: '100%',
  },
  plantName:{
    fontSize: fonts.size.span,
    fontFamily: fonts.family.bold,
    color: colors.heading,
  }
});
