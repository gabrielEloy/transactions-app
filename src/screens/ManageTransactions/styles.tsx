import {StyleSheet} from 'react-native';
import {COLORS} from 'src/themes/main';

const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactions: {
    flex: 5,
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: 'Exo-Medium',
    fontSize: 16,
    color: COLORS.gray,
  },
  totalText: {
    fontFamily: 'Exo-Light',
    fontSize: 42,
    color: COLORS.light,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Exo-Medium',
    color: COLORS.light,
    fontSize: 18,
  },
});

export default styles;
