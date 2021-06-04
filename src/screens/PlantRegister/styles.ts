import { StyleSheet } from 'react-native';
import { colors, fonts } from '~/styles';

export default StyleSheet.create({
  container:{
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 32,
    backgroundColor: colors.background,
  },
  plantInfo:{
    maxHeight: '53%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantImage:{
    maxHeight: 180,
  },
  waterTips:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
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
  timePicker:{
    marginBottom: 40,
  }
});
