import {CardCreateOptions, CardFindOptions, CardAllOptions} from "./options";
import {Card} from "./responses";

declare module 'pagarme' {
  export namespace client {
    export namespace cards {
      function all(pagination: CardAllOptions): Promise<Array<Card>>;

      function create(body: CardCreateOptions): Promise<Card>;

      function find(body: CardFindOptions): Promise<Card>;
    }
  }
}
