import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container:{
    height: 80,
    paddingHorizontal: 16,
    marginVertical: 6,
    flexDirection: 'row',
    backgroundColor: colors.shape,
    alignItems: 'center',
    borderRadius: 20,
  },
  plantPhoto:{
    maxWidth: 50,
    marginRight: 10,
  },
  waterText:{
    textAlign: 'right',
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.complement,
  }
});
