import {StyleSheet} from 'react-native';
import {color, fonts} from '../variables.style';

export const emptyStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    color: color.PRIMARY,
    fontSize: fonts.iconSize._ULTRA_LARGE,
    marginTop: 30,
    marginBottom: 15,
  },
  text: {
    color: color.BLACK,
    fontSize: fonts.size._MEDIUM,
    marginBottom: 20,
  },
});
