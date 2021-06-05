import { StyleSheet } from 'react-native';
import { colors, commonStyle } from '~/styles';

export default StyleSheet.create({
  root:{
    backgroundColor: colors.shape,
    minWidth: '40%',
    borderRadius: 10,
    paddingVertical: 4,
  },
  option:{
    paddingVertical: 10,
  },
  optionText:{
    ...commonStyle.text,
    color: colors.green_dark,
  },
  cancel:{
    paddingVertical: 10,
  },
  cancelText:{
    ...commonStyle.text,
    color: colors.red,
  }
});
