export { BalanceFindOptions } from './options';
export { Balance } from './responses';

export namespace balance {
  function find(opts: BalanceFindOptions): Promise<Balance>;
  function primary(opts: any): any;
}
