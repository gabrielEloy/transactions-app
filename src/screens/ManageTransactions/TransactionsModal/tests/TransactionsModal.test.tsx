import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import TransactionsModal from '../index';

describe('test <TransactionsModal />', () => {
  test('should successfully render component', () => {
    const tree = render(<TransactionsModal isModalVisible />);
    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render the component inputs', async () => {
    const {getByTestId, findByText} = render(
      <TransactionsModal isModalVisible />,
    );

    const descriptionInput = getByTestId('descriptionInput');
    const valueInput = getByTestId('valueInput');

    fireEvent.changeText(descriptionInput, 'received money');
    fireEvent.changeText(valueInput, '22,50');

    expect(findByText('received money')).not.toBeNull();
    expect(findByText('R$ 22,50')).not.toBeNull();
  });

  test('Should correctly render the component inputs', async () => {
    const {getByTestId, findByText} = render(
      <TransactionsModal isModalVisible />,
    );

    const descriptionInput = getByTestId('descriptionInput');
    const valueInput = getByTestId('valueInput');

    fireEvent.changeText(descriptionInput, 'received money');
    fireEvent.changeText(valueInput, '22,50');

    expect(findByText('received money')).not.toBeNull();
    expect(findByText('R$ 22,50')).not.toBeNull();
  });

  test('Nothing should happen when ', () => {
    const {getByTestId} = render(<TransactionsModal isModalVisible />);

    const addTransactionButton = getByTestId('addTransactionButton');
    fireEvent.press(addTransactionButton);

    const descriptionInput = getByTestId('descriptionInput');
    const valueInput = getByTestId('valueInput');

    expect(descriptionInput.props.value).toBeFalsy();
    expect(valueInput.props.value).toBeFalsy();
  });
});
