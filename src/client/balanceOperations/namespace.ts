import { BalanceOperation } from './responses';
import { BalanceOperationsFind } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace balanceOperations {
      function all(arg: BalanceOperationsFind): Promise<BalanceOperation>;
      function days(opts: any, body: any): any;
      function find(opts: any, body: any): any;
    }
  }
}
