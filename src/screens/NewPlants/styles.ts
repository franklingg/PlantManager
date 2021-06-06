import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container:{
    backgroundColor: colors.background,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 32,
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
  }
});
