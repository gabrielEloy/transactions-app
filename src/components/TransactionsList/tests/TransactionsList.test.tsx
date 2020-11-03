import 'react-native';
import React from 'react';
import {render} from 'react-native-testing-library';
import TransactionsList from '../index';

describe('test <TransactionsList />', () => {
  const transactions = [
    {
      date: '2020-08-17T19:53:14.283Z',
      debit: false,
      description: 'teste',
      id: '2020-08-17T19:53:14.283Z-teste',
      value: {currency: 'R$', value: 150},
    },
    {
      date: '2020-08-17T19:53:14.283Z',
      debit: true,
      description: 'teste2',
      id: '2020-08-17T19:53:14.283Z-teste2',
      value: {currency: 'R$', value: 350},
    },
  ];

  const onSwipe = jest.fn();

  test('Should correctly render componet', () => {
    const tree = render(
      <TransactionsList transactions={transactions} onSwipe={onSwipe} />,
    );
    expect(tree).toMatchSnapshot();
  });
});
