import {StyleSheet} from 'react-native';
import {COLORS} from 'src/themes/main';

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: 10,
  },
  modalAction: {
    width: '80%',
    height: 450,
    backgroundColor: COLORS.background,
    borderRadius: 20,
    overflow: 'hidden',
  },
  modalHeader: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    color: COLORS.light,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 25,
    marginBottom: 20,
  },
  text: {
    fontFamily: 'Exo-Medium',
    color: COLORS.light,
  },
  form: {
    flex: 2,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    color: COLORS.light,
    fontFamily: 'Exo-Medium',
  },
  inputContainer: {
    marginTop: 20,
  },
  switchStyle: {
    borderRadius: 0,
    marginTop: 20,
  },
  blackText: {color: 'black'},
});

export default styles;
