export { SearchOptions } from './options';
export { Search } from './response';
import { Customer } from '../customers';
import { BankAccount } from '../bankAccounts';
import { Subscription } from '../subscriptions';
import { Transaction } from '../transactions';

export function search<T, Q extends SearchOptions>(
  query: Q
): Promise<
  Search<
    Q extends { type: 'customer' }
      ? Customer
      : Q extends { type: 'transaction' }
      ? Transaction
      : Q extends { type: 'subscription' }
      ? Subscription
      : Q extends { type: 'bank_account' }
      ? BankAccount
      : T
  >
>;
