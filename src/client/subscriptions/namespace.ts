declare module 'pagarme' {
  export namespace client {
    export namespace subscriptions {
      function all(opts: any, body: any): any;

      function cancel(opts: any, body: any): any;

      function create(opts: any, body: any): any;

      function createTransaction(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      function findTransactions(opts: any, body: any): any;

      function settleCharge(opts: any, body: any): any;

      function update(opts: any, body: any): any;
    }
  }
}
