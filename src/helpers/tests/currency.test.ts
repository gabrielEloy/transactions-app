import {getValueAndCurrency, getCurrencyString} from '../currency';

describe('getCurrencyString', () => {
  test('Should format numberCurrency to string', () => {
    const formatedString = getCurrencyString({value: 30000, currency: 'R$'});
    const expectedResult = 'R$ 30.000,00';

    expect(formatedString).toEqual(expectedResult);
  });

  test('Should format unplanned currency using R$ format rules', () => {
    const formatedString = getCurrencyString({value: 30000, currency: 'EUR'});
    const expectedResult = 'EUR 30.000,00';

    expect(formatedString).toEqual(expectedResult);
  });
});

describe('getValueAndCurrency', () => {
  test('Should correctly retrieve value and curency from string', () => {
    const valueObj = getValueAndCurrency('R$ 31.234,78');
    const expectedResult = {
      value: 31234.78,
      currency: 'R$',
    };

    expect(valueObj).toEqual(expectedResult);
  });
});
