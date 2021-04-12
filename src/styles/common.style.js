import {StyleSheet} from 'react-native';
import {color} from './variables.style';

export const common = StyleSheet.create({
  body: {
    padding: 20,
  },
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    backgroundColor: color.PRIMARY,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    overflow: 'hidden',
    flexGrow: 1,
    paddingBottom: 50,
  },
});

export const imageStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  loader: {
    zIndex: 3,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
