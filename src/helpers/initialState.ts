import ITransactions from 'src/interfaces/ITransaction';

export const sumValue = (transactions: ITransactions[]) => {
  const total = transactions.reduce(
    (accumulator: number, currentValue: ITransactions) => {
      const value = currentValue.debit
        ? -currentValue.value.value
        : currentValue.value.value;

      return value + accumulator;
    },
    0,
  );

  return total;
};
