import {CardCreateOptions} from "./options";
import {Card} from "./responses";

declare module 'pagarme' {
  export namespace client {
    export namespace cards {
      function all(opts: any, pagination: any): any;

      function create(opts: CardCreateOptions): Promise<Card>;

      function find(opts: any, body: any): any;
    }
  }
}
