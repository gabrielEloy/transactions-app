import {sumValue} from '../initialState';

describe('sumValue', () => {
  test('Should return right total value for a negative value', () => {
    const negativeSumMock = [
      {
        date: '2020-08-17T19:53:14.283Z',
        debit: false,
        description: 'teste',
        id: '2020-08-17T19:53:14.283Z-teste',
        value: {curency: 'R$', value: 150},
      },
      {
        date: '2020-08-17T19:53:14.283Z',
        debit: true,
        description: 'teste2',
        id: '2020-08-17T19:53:14.283Z-teste2',
        value: {curency: 'R$', value: 350},
      },
    ];

    const result = sumValue(negativeSumMock);
    const expectedReulst = -200;

    expect(result).toEqual(expectedReulst);
  });
  test('Should return right total value for a positive value', () => {
    const negativeSumMock = [
      {
        date: '2020-08-17T19:53:14.283Z',
        debit: false,
        description: 'teste',
        id: '2020-08-17T19:53:14.283Z-teste',
        value: {curency: 'R$', value: 150},
      },
      {
        date: '2020-08-17T19:53:14.283Z',
        debit: false,
        description: 'teste2',
        id: '2020-08-17T19:53:14.283Z-teste2',
        value: {curency: 'R$', value: 350},
      },
    ];

    const result = sumValue(negativeSumMock);
    const expectedReulst = 500;

    expect(result).toEqual(expectedReulst);
  });
});
