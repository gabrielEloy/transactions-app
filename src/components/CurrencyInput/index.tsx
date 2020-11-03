import React from 'react';
import {TextInputProps} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

const CurrencyInput = (props: TextInputProps) => {
  return (
    <TextInputMask
      type="money"
      options={{
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$ ',
        suffixUnit: '',
      }}
      {...props}
    />
  );
};

export default CurrencyInput;
