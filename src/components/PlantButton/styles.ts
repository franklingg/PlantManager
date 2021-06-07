import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    marginVertical: 6,
    flexDirection: 'row',
    backgroundColor: colors.shape,
    alignItems: 'center',
    borderRadius: 20,
  },
  plantPhoto: {
    maxWidth: 50,
    marginRight: 10,
  },
  waterText: {
    textAlign: 'right',
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.complement,
  },
  trashButton: {
    marginLeft: -30,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 6,
    paddingRight: 24,
    width: 100,
    height: 80,
    borderRadius: 20,
  },
  modal:{
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 322,
    width: 265,
    padding: 32,
    borderRadius: 20,
  },
  modalPhoto:{
    maxHeight: 120,
    maxWidth: 120,
    backgroundColor: colors.shape,
    borderRadius: 20,
  },
  modalButtons:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalBtn:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.shape,
  },
  modalBtnText:{
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.span,
    color: colors.heading,
  },
  cardContainer:{
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
  cardPlantPhoto:{
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cardPlantName:{
    fontSize: fonts.size.span,
    fontFamily: fonts.family.bold,
    color: colors.heading,
  }
});
