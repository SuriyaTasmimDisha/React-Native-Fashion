import {StyleSheet} from 'react-native';
import {SLIDER_HEIGHT} from '../../constants/cssConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDER_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // borderTopLeftRadius: 75,
  },
});

export default styles;
