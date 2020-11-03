import {createContext} from 'react';
import IFormTransaction from 'src/interfaces/IFormTransaction';
import ITransactions from 'src/interfaces/ITransaction';

interface IContext {
  addTransaction: (e: IFormTransaction) => void;
  setModalVisible: (e: boolean) => void;
  removeTransaction: (transaction: ITransactions) => void;
}
const TransactionsContext = createContext<Partial<IContext>>({});

export default TransactionsContext;
