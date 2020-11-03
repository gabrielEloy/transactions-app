import {StyleSheet} from 'react-native';
import {COLORS} from 'src/themes/main';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.contrastBackground,
    height: 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection: 'row',
    borderRadius: 3,
  },
  indicatorContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  valueContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debit: {
    color: COLORS.debit,
  },
  credit: {
    color: COLORS.credit,
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Exo-Medium',
    color: COLORS.gray,
  },

  descriptionText: {
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'Exo-Medium',
    color: COLORS.light,
  },
  gradientStyle: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
});

export default styles;
