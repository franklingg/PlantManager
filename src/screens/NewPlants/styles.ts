import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';
import fonts from '~/styles/fonts';

export default StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 32,
  },
  loading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingView: {
    
  }
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lightTitle: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.heading,
    color: colors.body_dark
  },
  darkTitle: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.heading,
    color: colors.heading
  },
  image:{
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: colors.green_dark,
    borderWidth: 2,
  }
});
