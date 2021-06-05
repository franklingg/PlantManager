import { StyleSheet } from 'react-native';
import { colors, fonts, commonStyle } from '~/styles';

export default StyleSheet.create({
  container:{
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 32,
    backgroundColor: colors.background,
  },
  returnButton:{
    position: 'absolute',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: 16,
    top: 34,
  },
  plantInfo:{
    maxHeight: 310,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantImage:{
    maxHeight: 176,
  },
  plantName:{
    ...commonStyle.heading,
    ...commonStyle.bold,
    marginBottom: 8,
  },
  waterTips:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
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
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  timeButton:{
    backgroundColor: colors.shape,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    minWidth: '40%',
  },
  timeButtonAlone:{
    paddingVertical: 12,
    minWidth: '50%'
  }
});
