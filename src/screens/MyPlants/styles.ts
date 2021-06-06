import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container:{
    padding: 32,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image:{
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: colors.green_dark,
    borderWidth: 2,
  },
  waterTips:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 18,
    padding: 16,
    backgroundColor: colors.blue_light,
    borderRadius: 20,
  },
  waterDrop:{
    marginRight: 24,
  },
  waterText:{
    flex: 1,
    color: colors.blue,
    fontSize: fonts.size.span,
    fontFamily: fonts.family.regular,
  },
  plantsList:{
    marginTop: 16,
  },
  noPlants:{
    marginTop: 23,
    lineHeight: 27,
    fontFamily: fonts.family.regular,
    color: colors.body_dark,
    fontSize: fonts.size.span,
    textAlign: 'center',
    backgroundColor: colors.red_light,
    borderRadius: 20,
    paddingVertical: 15,
  }
});
