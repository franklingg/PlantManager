import {StyleSheet} from 'react-native';
import { colors } from '~/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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
