export { CustomerCreateOptions } from './options';
export { Customer } from './responses';

export namespace customers {
  function all(opts: any, body: any): Promise<Customer[]>;
  function create(body: CustomerCreateOptions): Promise<Customer>;
  function find(opts: any, body: any): Promise<Customer>;
}
