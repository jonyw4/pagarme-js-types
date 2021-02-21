import { Transfer } from '../transfers/responses';
import { Payable } from '../payables/responses';

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
