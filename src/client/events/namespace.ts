import { Options } from "../../common/Options";
import { EventsFindCustomOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace events {
      /**
       * 
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-todos-os-eventos-de-uma-transa%C3%A7%C3%A3o)
       */
      function find(opts: Options, body: EventsFindCustomOptions): any;
      /**
       * Makes a request to /events
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request.
       */
      function findCustom(opts: Options, body: object): any;
    }
  }
}
