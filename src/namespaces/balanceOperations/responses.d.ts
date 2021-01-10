import { Transfer } from '../transfers';
import { Payable } from '../payables';

export interface BalanceOperation {
  Object: 'balance_operation';
  id: string;
  status: 'waiting_funds' | 'available' | 'transferred';
  balance_amount: number;
  type: 'payable' | 'anticipation' | 'transfer';
  amount: number;
  fee: number;
  date_created: string;
  movement_object: Transfer | Payable;
}
