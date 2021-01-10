export { BalanceOperationsFind } from './options';
export { BalanceOperation } from './responses';

export namespace balanceOperations {
  function all(arg: BalanceOperationsFind): Promise<BalanceOperation>;
  function days(opts: any, body: any): any;
  function find(opts: any, body: any): any;
}
