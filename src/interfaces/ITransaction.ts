import IFormTransaction from './IFormTransaction';

interface ITransactions extends IFormTransaction {
  id: string;
  date: string;
}

export default ITransactions;
