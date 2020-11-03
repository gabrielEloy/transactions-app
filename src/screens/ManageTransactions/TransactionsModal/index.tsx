import React, {useState, useContext} from 'react';
import {View, Text, Modal, TextInput, Alert} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

import {COLORS} from 'src/themes/main';
import Button from 'src/components/Button';
import Divider from 'src/components/Divider';
import TransactionsContext from 'src/contexts/TransactionsContext';
import CurrencyInput from 'src/components/CurrencyInput';
import {getValueAndCurrency} from 'src/helpers/currency';
import styles from './styles';

interface Props {
  isModalVisible: boolean;
}

const TransactionsModal = (props: Props) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [debit, setIsDebit] = useState(false);

  const context = useContext(TransactionsContext);

  const resetState = () => {
    setValue('');
    setDescription('');
    setIsDebit(false);
  };

  const handleSwitchSelect = (switchValue: string) => {
    setIsDebit(switchValue === 'Debit');
  };
  const handleValue = (val: string) => {
    setValue(val);
  };
  const handleDescription = (descValue: string) => setDescription(descValue);

  const checkFilledFields = () => {
    let errors = '';

    if (!description) {
      errors += '- missing description \n';
    }
    if (!value) {
      errors += '- missing value \n';
    }

    return errors;
  };

  const handleAddTransaction = () => {
    const errors = checkFilledFields();

    if (errors) {
      Alert.alert('Missing fields', errors);
      return;
    }

    context.addTransaction({
      description,
      value: getValueAndCurrency(value),
      debit,
    });
    context.setModalVisible(false);
    resetState();
  };

  const cancelAddTransaction = () => {
    resetState();
    context.setModalVisible(false);
  };

  const options = [
    {label: 'Credit', value: 'Credit', activeColor: COLORS.primary},
    {label: 'Debit', value: 'Debit', activeColor: COLORS.primary},
  ];

  return (
    <Modal transparent animationType="fade" visible={props.isModalVisible}>
      <View style={styles.modalStyle}>
        <View style={styles.modalAction}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>New Transaction</Text>
            <Divider />
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.text}>Type</Text>
              <SwitchSelector
                initial={0}
                borderRadius={5}
                animationDuration={200}
                style={styles.switchStyle}
                options={options}
                onPress={handleSwitchSelect}
                textStyle={{...styles.text, ...styles.blackText}}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Description</Text>
              <TextInput
                testID="descriptionInput"
                value={description}
                onChangeText={handleDescription}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>Value</Text>
              <CurrencyInput
                testID="valueInput"
                value={value}
                onChangeText={handleValue}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Button
              testID="cancelButton"
              onPress={cancelAddTransaction}
              removeBackground>
              <Text style={styles.text}>Cancel</Text>
            </Button>
            <Button
              testID="addTransactionButton"
              onPress={handleAddTransaction}>
              <Text style={styles.text}>Add</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionsModal;
