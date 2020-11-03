import {StyleSheet} from 'react-native';
import {COLORS} from 'src/themes/main';

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 73,
    transform: [{translateX: -10}, {translateY: 6}],
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
  },
  deleteText: {
    color: COLORS.light,
  },
});

export default styles;
