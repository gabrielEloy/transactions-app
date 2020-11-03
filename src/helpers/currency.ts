import IValue from 'src/interfaces/IValue';
import {replaceChars} from './strings';

export const getValueAndCurrency = (stringValue: string) => {
  const [currency, value] = stringValue.split(' ');
  const numericValue = replaceChars(value, {'.': '', ',': '.'}) || '0';
  return {currency, value: parseFloat(numericValue)};
};

export const getCurrencyString = (valueObject: IValue) => {
  const {value, currency} = valueObject;

  switch (currency) {
    default:
    case 'R$': {
      return `${currency} ${value
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
  }
};
