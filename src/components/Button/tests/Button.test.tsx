import {Text} from 'react-native';

import React from 'react';
import {render} from 'react-native-testing-library';
import Button from '../index';

describe('test <Button />', () => {
  test('Renders children when passed in', () => {
    const mockFn = jest.fn();
    const children = <Text>oi</Text>;

    const tree = render(<Button onPress={mockFn}>{children}</Button>);

    expect(tree.findAllByText('oi')).not.toBeNull();
  });
});
