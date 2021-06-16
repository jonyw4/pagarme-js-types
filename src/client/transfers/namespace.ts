import { Transfer } from './responses';
import { 
  TransferAllOptions, 
  TransferCreateOptions, 
  TransferFindOptions 
} from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace transfers {
      function all(args: TransferAllOptions): Promise<Transfer[]>;
      function create(opts: TransferCreateOptions): Promise<Transfer>;

      function cancel(opts: any, body: any): any;
      function days(opts: any): any;
      function find(body: TransferFindOptions): any;
      function find(opts: any, body: TransferFindOptions): any;
      function limits(opts: any, params: any): any;
    }
  }
}
