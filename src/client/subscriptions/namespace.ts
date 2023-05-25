import { Options } from "../../common/Options";
import { SubscriptionAllOptions, SubscriptionCancelOptions, SubscriptionCreateTransactionOptions, SubscriptionFindOptions, SubscriptionFindTransactionsOptions, SubscriptionSettleChargeOptions, SubscriptionUpdateOptions } from "./options";

declare module 'pagarme' {
  export namespace client {
    export namespace subscriptions {
      /**
       * Makes a request to /subscriptions to get all subscriptions
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function all(opts: Options, body: SubscriptionAllOptions): Promise<any[]>;

      /**
       * Cancels a subscription
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#cancelando-uma-assinatura)
       */
      function cancel(opts: Options, body: SubscriptionCancelOptions): Promise<any>;

      /**
       * Creates a subscription from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#criando-assinaturas)
       */
      function create(opts: Options, body: object): Promise<any>;

      /**
       * Creates a transaction for a subscription
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request
       */
      function createTransaction(opts: Options, body: SubscriptionCreateTransactionOptions): Promise<any>;

      /**
       * Makes a request to /subscriptions or to /subscriptions/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-uma-assinatura)
       */
      function find(opts: Options, body: SubscriptionFindOptions): Promise<any[]>;

      /**
       * Gets transactions for a subscription
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#transa%C3%A7%C3%B5es-em-uma-assinatura)
       */
      function findTransactions(opts: Options, body: SubscriptionFindTransactionsOptions): Promise<any[]>;

      /**
       * Skips the next x charges for a subscription
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://docs.pagar.me/reference#pulando-cobran%C3%A7as)
       */
      function settleCharge(opts: Options, body: SubscriptionSettleChargeOptions): Promise<any>;

      /**
       * Updates a subscription from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#atualizando-uma-assinatura)
       */
      function update(opts: Options, body: SubscriptionUpdateOptions): Promise<any>;
    }
  }
}
