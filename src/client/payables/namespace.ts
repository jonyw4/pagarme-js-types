import { Payable } from './responses';
import { PayableFindOptions, PayableAllOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace payables {
      function all(args: PayableAllOptions): Promise<Payable[]>;
      function find(opts: PayableFindOptions): Promise<Payable[]>;
      function days(opts: any, body: any): any;
    }
  }
}
