import React from 'react';
import {render} from 'react-native-testing-library';
import CurrencyInput from '../index';

describe('Button', () => {
  it('should render correctly', () => {
    const tree = render(<CurrencyInput />);
    expect(tree).toMatchSnapshot();
  });
});
