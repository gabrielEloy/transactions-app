import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import ITransactions from 'interfaces/ITransactions';
import styles from './styles';

interface Props {
  onPress: (transaction: ITransactions) => void;
}

const SwipeView = ({onPress}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.container}
    testID="deleteTransaction">
    <Text style={styles.deleteText}>Delete</Text>
  </TouchableOpacity>
);

export default SwipeView;
