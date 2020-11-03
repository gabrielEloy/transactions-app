import React from 'react';
import {render} from 'react-native-testing-library';
import Divider from '../index';

describe('Button', () => {
  it('should render correctly', () => {
    const tree = render(<Divider />);
    expect(tree).toMatchSnapshot();
  });
});
