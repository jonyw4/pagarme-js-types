export { BankAccountCreateOptions } from './options';
export { BankAccount } from './responses';

export namespace bankAccounts {
  function all(opts: any, body: any): any;
  function create(opts: BankAccountCreateOptions): Promise<BankAccount>;
  function find(opts: any): Promise<BankAccount>;
}
