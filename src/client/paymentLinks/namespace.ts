import { Options } from "../../common/Options";
import { PaymentLinksAllOptions, PaymentLinksCancelOptions, PaymentLinksCreateOptions, PaymentLinksFindOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace paymentLinks {
      /**
       * Makes a request to /payment_links to get all paymentLinks.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function all(opts: Options, body: PaymentLinksAllOptions): Promise<any>;

      /**
       * Cancels a paymentLink from the given id.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function cancel(opts: Options, body: PaymentLinksCancelOptions): Promise<any>;

      /**
       * Creates a paymentLink from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://docs.pagar.me/v2017-08-28/reference#criando-um-link-de-pagamento-1)
       */
      function create(opts: Options, body: PaymentLinksCreateOptions): Promise<any>;

      /**
       * Makes a request to /payment_links or to /payment_links/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://docs.pagar.me/v2017-08-28/reference#retornando-links-de-pagamento)
       */
      function find(opts: Options, body: PaymentLinksFindOptions): Promise<any>;
    }
  }
}
