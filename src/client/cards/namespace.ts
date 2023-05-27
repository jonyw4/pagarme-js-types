import { Options } from "../../common/Options";
import { CardCreateOptions, CardFindOptions, CardAllOptions } from "./options";
import { Card } from "./responses";

declare module 'pagarme' {
  export namespace client {
    export namespace cards {
      /**
       * Makes a request to /cards
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-todos-os-cart%C3%B5es)
       */
      function all(opts: Options, body: CardAllOptions): Promise<Card[]>;
      /**
       * Makes a request to /cards
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-todos-os-cart%C3%B5es)
       */
      function all(body: CardAllOptions): Promise<Card[]>;

      /**
       * Creates a card from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#criando-um-cartao)
       */
      function create(opts: Options, body: CardCreateOptions): Promise<Card>;
      /**
       * Creates a card from the given payload.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#criando-um-cartao)
       */
      function create(body: CardCreateOptions): Promise<Card>;

      /**
       * Makes a request to /cards or to /cards/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-um-cart%C3%A3o-salvo-1)
       */
      function find(opts: Options, body: CardFindOptions): Promise<Card>;
      /**
       * Makes a request to /cards or to /cards/:id
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-um-cart%C3%A3o-salvo-1)
       */
      function find(body: CardFindOptions): Promise<Card>;
    }
  }
}
