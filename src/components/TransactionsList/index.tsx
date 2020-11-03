import React from 'react';
import {FlatList} from 'react-native';
import Transaction from 'src/components/Transaction';

import ITransactions from 'src/interfaces/ITransaction';
import styles from './styles';

interface ITransactionList {
  transactions: ITransactions[];
  onSwipe: (transaction: ITransactions) => void;
}

const TransactionsList = ({transactions, onSwipe}: ITransactionList) => {
  const renderItem = ({item}: {item: ITransactions}) => (
    <Transaction {...item} style={styles.transactionSpacer} onSwipe={onSwipe} />
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.date}-${item.description}`}
      testID="transactionList"
    />
  );
};

export default TransactionsList;
