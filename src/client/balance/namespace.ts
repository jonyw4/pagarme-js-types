import { BalanceFindOptions } from './options';
import { BalanceResponse } from './responses';

// TODO: Create interface for primary method
declare module 'pagarme' {
  export namespace client {
    export namespace balance {
      export function find(opts: BalanceFindOptions): Promise<BalanceResponse>;
      export function primary(opts: any): any;
    }
  }
}
