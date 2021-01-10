export { Refund } from './responses';
export { RefundFindOptions } from './options';

export namespace refunds {
  function find(opts: any, body: RefundFindOptions): Promise<Refund[]>;
  function cancel(opts: any, body: any): any;
}
