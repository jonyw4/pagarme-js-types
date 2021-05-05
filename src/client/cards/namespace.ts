import {CardCreateOptions, CardFindOptions, CardAllOptions} from "./options";
import {Card} from "./responses";

declare module 'pagarme' {
  export namespace client {
    export namespace cards {
      function all(opts: any, pagination: CardAllOptions): Promise<Array<Card>>;

      function create(opts: any, body: CardCreateOptions): Promise<Card>;

      function find(opts: any, body: CardFindOptions): Promise<Card>;
    }
  }
}
