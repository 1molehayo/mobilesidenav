import {StyleSheet} from 'react-native';
import {color} from '../variables.style';

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: color.WHITE,
    marginHorizontal: 3,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  textBox: {
    padding: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: color.ASH,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  col1: {
    width: '40%',
  },
  col2: {
    width: '60%',
  },
  label: {
    color: color.GREY,
    flex: 1,
    flexWrap: 'wrap',
  },
  title: {
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
