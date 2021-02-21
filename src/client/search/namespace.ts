import { SearchOptions } from './options';
import { Search } from './response';
import { Customer } from '../customers/responses';
import { BankAccount } from '../bankAccounts/responses';
import { Transaction } from '../transactions/responses';

declare module 'pagarme' {
  export namespace client {
    export function search<T, Q extends SearchOptions>(
      query: Q
    ): Promise<
      Search<
        Q extends { type: 'customer' }
          ? Customer
          : Q extends { type: 'transaction' }
          ? Transaction
          : Q extends { type: 'subscription' }
          ? any
          : Q extends { type: 'bank_account' }
          ? BankAccount
          : T
      >
    >;
  }
}
