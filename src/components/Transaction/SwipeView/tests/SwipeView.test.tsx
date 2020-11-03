import React from 'react';
import {render} from 'react-native-testing-library';
import SwipeView from '../index';

describe('Button', () => {
  test('Should render correctly', () => {
    const tree = render(<SwipeView onPress={() => console.log('oi')} />);
    expect(tree).toMatchSnapshot();
  });
});
