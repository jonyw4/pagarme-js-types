export { Payable } from './responses';
export { PayableFindOptions, PayableAllOptions } from './options';

export namespace payables {
  function all(args: PayableAllOptions): Promise<Payable[]>;
  function find(opts: PayableFindOptions): Promise<Payable[]>;
  function days(opts: any, body: any): any;
}
