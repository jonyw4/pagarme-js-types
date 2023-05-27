import { Options } from "../../common/Options";
import { SecurityEncryptOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace security {
      /**
       * Encrypt a card object into a card_hash
       * @param opts An options params which is usually already bound by connect functions.
       * @param card The card object. API Reference for this payload (https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente)
       */
      function encrypt(opts: Options, card: SecurityEncryptOptions): Promise<string>;
      /**
       * Encrypt a card object into a card_hash
       * @param card The card object. API Reference for this payload (https://pagarme.readme.io/v1/reference#gerando-card_hash-manualmente)
       */
      function encrypt(card: SecurityEncryptOptions): Promise<string>;

      /**
       * Generates a hash signed with your api_key. This is used mainly to validate postbacks, this functions is the same as pagarme.postback.calculatesignature but it already knows your api_key.
       * @param opts An options params which is usually already bound by connect functions.
       * @param string The string to be hashed.
       */
      function sign(opts: Options, string: string): any;

      /**
       * Verifies a hash signed with your api_key. This is used mainly to validate postbacks, this functions is the same as pagarme.postback.validateSignature but it already knows your api_key.
       * @param opts An options params which is usually already bound by connect functions.
       * @param string The string to be hashed.
       * @param expected The expected result.
       */
      function verify(opts: Options, string: string, expected: string): boolean;
    }
  }
}
