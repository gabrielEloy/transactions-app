import IValue from './IValue';

export default interface IFormTransaction {
  description: string;
  value: IValue;
  debit: boolean;
};
