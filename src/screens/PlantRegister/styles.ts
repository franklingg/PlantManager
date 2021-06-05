import { StyleSheet } from 'react-native';
import { colors, fonts, commonStyle } from '~/styles';

export default StyleSheet.create({
  container:{
    paddingTop: 8,
    paddingBottom: 32,
    paddingHorizontal: 32,
    backgroundColor: colors.background,
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
