import {StyleSheet} from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    paddingTop: '12%',
    alignItems: 'center',
    flex: 1
  },
  emoji: {
    fontSize: 36,
    marginBottom: 15
  },
  input: {
    marginBottom: 40,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '70%',
    textAlign: 'center'
  }
});
