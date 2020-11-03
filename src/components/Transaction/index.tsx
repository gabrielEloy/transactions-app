import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import LinearGradient from 'react-native-linear-gradient';
import {getCurrencyString} from 'src/helpers/currency';
import IValue from 'src/interfaces/IValue';
import styles from './styles';
import ITransactions from '../../interfaces/ITransaction';
import SwipeView from './SwipeView';

interface Props {
  id: string;
  description: string;
  value: IValue;
  debit: boolean;
  date: string;
  style?: object;
  onSwipe: (transaction: ITransactions) => void;
}

const Transaction = ({
  debit,
  value,
  description,
  style,
  date,
  id,
  onSwipe,
}: Props) => {
  const [gradientColors, valueStyle] = debit
    ? [['#FFB4B5', '#FF454A'], styles.debit]
    : [['#BEFFA0', '#24C832'], styles.credit];

  const handleSwipe = () => {
    onSwipe({debit, value, description, id, date});
  };

  return (
    <Swipeable
      rightThreshold={100}
      overshootRight={false}
      renderRightActions={() => <SwipeView onPress={handleSwipe} />}>
      <View style={[styles.container, style]}>
        <View style={styles.indicatorContainer}>
          <LinearGradient
            colors={gradientColors}
            start={{x: 0.8, y: 0}}
            end={{x: 0.2, y: 0.7}}
            style={styles.gradientStyle}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text adjustsFontSizeToFit style={styles.descriptionText}>
            {description}
          </Text>
          <Text
            testID="transactionDate"
            adjustsFontSizeToFit
            style={styles.dateText}>
            {moment(date).format('DD/MM/YYYY, h:mm:ss a')}
          </Text>
        </View>
        <View style={styles.valueContainer}>
          <Text
            testID="transactionValue"
            adjustsFontSizeToFit
            style={valueStyle}>
            {getCurrencyString(value)}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default Transaction;
