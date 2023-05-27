import { Options } from "../../common/Options";
import { PostbacksFindOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace postbacks {
      /**
       * 
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-um-postback)
       */
      function find(opts: Options, body: PostbacksFindOptions): any;

      /**
       * Redeliver a POSTback for a model
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#reenviando-um-postback)
       */
      function redeliver(opts: Options, body: any): any;
    }
  }
}
