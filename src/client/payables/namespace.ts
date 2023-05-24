import { Payable } from './responses';
import { PayableFindBody } from './bodies';
import { Options } from '../../common/Options';

declare module 'pagarme' {
  export namespace client {
    export namespace payables {
      /**
       * Makes a request to /payables
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. https://docs-beta.pagar.me/v1/reference#retornando-recebíveis
       */
      function all(opts: Options, body: object): Promise<Payable[]>;

      /**
       * Returns a company's payables aggregated by day
       * @param opts An options params which is usually already bound by connect functions.
       */
      function days(opts: Options): Promise<any>;

      /**
       * Makes a request to /payables or to /payables/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-um-receb%C3%ADvel)
       */
      function find(opts: Options, body: PayableFindBody): Promise<Payable[]>;
    }
  }
}
