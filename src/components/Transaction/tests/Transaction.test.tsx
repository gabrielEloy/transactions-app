import React from 'react';
import Transaction from 'src/components/Transaction';

import {render} from 'react-native-testing-library';

describe('Button', () => {
  const transaction = {
    date: '2020-08-17T19:53:14.283Z',
    debit: false,
    description: 'teste2',
    id: '2020-08-17T19:53:14.283Z-teste2',
    value: {currency: 'R$', value: 3500},
  };
  const onSwipe = jest.fn();
  const tree = render(<Transaction {...transaction} onSwipe={onSwipe} />);

  test('Should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Should correctly format date', async () => {
    const {queryByText} = await render(
      <Transaction {...transaction} onSwipe={onSwipe} />,
    );

    expect(queryByText('17/08/2020, 4:53:14 pm')).not.toBeNull();
  });

  test('Should correctly format currency', () => {
    const {queryByText} = render(
      <Transaction {...transaction} onSwipe={onSwipe} />,
    );

    expect(queryByText('R$ 3.500,00')).not.toBeNull();
  });
});
