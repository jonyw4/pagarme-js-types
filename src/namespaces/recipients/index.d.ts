export { Recipient } from './responses';
export { RecipientUpdateOptions, RecipientCreateOptions } from './options';

export namespace recipients {
  function all(opts: any, body: any): any;
  function create(opts: RecipientCreateOptions): Promise<Recipient>;
  function update(opts: RecipientUpdateOptions): Promise<Recipient>;
  function find(opts: any): any;
}
