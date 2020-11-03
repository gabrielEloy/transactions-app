import React from 'react';
import {View, StyleSheet} from 'react-native';

import {COLORS} from 'src/themes/main';
import ManageTransactions from 'src/screens/ManageTransactions';

const App = () => (
  <View style={styles.container}>
    <ManageTransactions />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default App;
