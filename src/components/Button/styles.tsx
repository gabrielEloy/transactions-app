import {StyleSheet} from 'react-native';
import {COLORS} from 'src/themes/main';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  removeBackground: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

export default styles;
