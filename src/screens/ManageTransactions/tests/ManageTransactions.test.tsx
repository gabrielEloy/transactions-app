import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import ManageTransactions from '../index';

describe('test <ManageTransactions />', () => {
  test('should successfully render component', () => {
    const tree = render(<ManageTransactions />);
    expect(tree).toMatchSnapshot();
  });

  test('should render modal but keep it invisible', async () => {
    const {getByTestId} = await render(<ManageTransactions />);

    const modal = await getByTestId('modal');

    expect(modal.props.visible).toBeFalsy();
  });

  test('should change modal visibility on click the add transaction button', () => {
    const {getByTestId} = render(<ManageTransactions />);

    const addTransactionButton = getByTestId('rootAddTransactionButton');

    fireEvent.press(addTransactionButton);
    const modal = getByTestId('modal');

    expect(modal.props.visible).toBeTruthy();
  });

  test('should succesfully add transaction', () => {
    const {getByTestId} = render(<ManageTransactions />);

    const transactionInitialListDataLength = getByTestId('transactionList')
      .props.data.length;

    const addTransactionButton = getByTestId('rootAddTransactionButton');
    const modalAddTransactionButton = getByTestId('addTransactionButton');
    const descriptionInput = getByTestId('descriptionInput');
    const valueInput = getByTestId('valueInput');

    fireEvent.press(addTransactionButton);

    fireEvent.changeText(descriptionInput, 'received money');
    fireEvent.changeText(valueInput, '22,50');

    fireEvent.press(modalAddTransactionButton);

    const transactionFinalListDataLength = getByTestId('transactionList').props
      .data.length;
    expect(transactionFinalListDataLength).toBeGreaterThan(
      transactionInitialListDataLength,
    );
  });

  test('should succesfully add transaction', () => {
    const {getByTestId} = render(<ManageTransactions />);

    const transactionInitialListDataLength = getByTestId('transactionList')
      .props.data.length;

    const addTransactionButton = getByTestId('rootAddTransactionButton');
    const modalAddTransactionButton = getByTestId('addTransactionButton');
    const descriptionInput = getByTestId('descriptionInput');
    const valueInput = getByTestId('valueInput');

    fireEvent.press(addTransactionButton);

    fireEvent.changeText(descriptionInput, 'received money');
    fireEvent.changeText(valueInput, '22,50');

    fireEvent.press(modalAddTransactionButton);

    const transactionFinalListDataLength = getByTestId('transactionList').props
      .data.length;
    expect(transactionFinalListDataLength).toBeGreaterThan(
      transactionInitialListDataLength,
    );
  });
});
