import { BankAccountCreateOptions } from './options';
import { BankAccount } from './responses';

declare module 'pagarme' {
  export namespace client {
    export namespace bankAccounts {
      function all(opts: any, body: any): any;
      function create(opts: BankAccountCreateOptions): Promise<BankAccount>;
      function find(opts: any): Promise<BankAccount>;
    }
  }
}
