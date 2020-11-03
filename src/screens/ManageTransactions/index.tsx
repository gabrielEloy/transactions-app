import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

import Button from 'src/components/Button';
import TransactionsList from 'src/components/TransactionsList';
import {getCurrencyString} from 'src/helpers/currency';
import TransactionsContext from 'src/contexts/TransactionsContext';
import ITransactions from 'src/interfaces/ITransaction';
import IFormTransaction from 'src/interfaces/IFormTransaction';
import {sumValue} from 'src/helpers/initialState';
import TransactionsModal from './TransactionsModal';
import styles from './styles';

const ManageTransactions = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  const [total, setTotal] = useState(0);

  const getTotalValue = (evalutatedTransactions: ITransactions[]) =>
    setTotal(sumValue(evalutatedTransactions));

  const handleInitialState = async () => {
    const savedTransactions = await AsyncStorage.getItem('transactions');
    if (savedTransactions) {
      const parsedTransactions = JSON.parse(savedTransactions);

      setTransactions(parsedTransactions);
      getTotalValue(parsedTransactions);
    }
  };

  useEffect(() => {
    handleInitialState();
  }, []);

  //fazer isso virar lógica interna do updateTotal
  
  const updateTotal = (transaction: ITransactions, add: boolean) => {
    const transactionValue = transaction.debit
      ? -transaction.value.value
      : transaction.value.value;

    const newTotal = add ? transactionValue + total : -transactionValue + total;

    setTotal(newTotal);
  };


  //trocar addTransaction por um hook

  const addTransaction = async (transactionForm: IFormTransaction) => {
    const date = moment().toISOString();
    const id = `${date}-${transactionForm.description}`;
    const addedTransaction = {...transactionForm, date, id};
    const updatedTransactions = [addedTransaction, ...transactions];

    setTransactions(updatedTransactions);
    updateTotal(addedTransaction, true);

    await AsyncStorage.setItem(
      'transactions',
      JSON.stringify(updatedTransactions),
    );
  };

  const removeTransaction = async (removedTransaction: ITransactions) => {
    const filteredTransaction = transactions.filter(
      (transaction) => transaction.id !== removedTransaction.id,
    );

    setTransactions(filteredTransaction);
    updateTotal(removedTransaction, false);

    await AsyncStorage.setItem(
      'transactions',
      JSON.stringify(filteredTransaction),
    );
  };
  
  return (
    <TransactionsContext.Provider
      value={{addTransaction, setModalVisible, removeTransaction}}>
      <TransactionsModal isModalVisible={isModalVisible} />
      <View style={styles.header}>
        <Text style={styles.descriptionText}>Total</Text>
        <Text style={styles.totalText}>
          {getCurrencyString({value: total, currency: 'R$'})}
        </Text>
        <Button
          testID="rootAddTransactionButton"
          onPress={() => setModalVisible(!isModalVisible)}>
          <Text style={styles.buttonText}>Add transaction</Text>
        </Button>
      </View>
      <View style={styles.transactions}>
        <Text style={styles.descriptionText}>Transactions</Text>
        <TransactionsList
          transactions={transactions}
          onSwipe={removeTransaction}
        />
      </View>
    </TransactionsContext.Provider>
  );
};

export default ManageTransactions;
