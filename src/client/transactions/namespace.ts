import { Options } from '../../common/Options';
import {
  TransactionCreateOptions,
  TransactionAllOptions,
  TransactionCalculateInstallmentsAmountOptions,
  TransactionFindOptions,
  TransactionCaptureOptions,
  TransactionRefundOptions,
  TransactionCollectPaymentOptions,
  TransactionReprocessOptions,
  TransactionUpdateOptions
} from './options';
import { Transaction, CalculateInstallmentsAmount, CardHashKey } from './responses';

declare module 'pagarme' {
  export namespace client {
    export namespace transactions {
      /**
       * Makes a request to /transactions to get all transactions.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function all(
        opts: Options,
        body: TransactionAllOptions
      ): Promise<Transaction[]>;

      /**
       * Calculates the value of each purchase's installments
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function calculateInstallmentsAmount(
        opts: Options,
        body: TransactionCalculateInstallmentsAmountOptions
      ): Promise<CalculateInstallmentsAmount>;

      /**
       * Captures a transaction from the given id.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function capture(opts: Options, body: TransactionCaptureOptions): Promise<Transaction>;

      /**
       * Create a card hash key
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://dash.readme.io/project/pagarme/v1/refs/gerando-card_hash-manualmente-1)
       */
      function cardHashKey(opts: Options, body: object): Promise<CardHashKey>;

      /**
       * Sends a payment link to a customer
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/reference#notificando-cliente-sobre-boleto-a-ser-pago)
       */
      function collectPayment(opts: Options, body: TransactionCollectPaymentOptions): Promise<any>;

      /**
       * Creates a transaction from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/reference#criar-transa%C3%A7%C3%A3o)
       */
      function create(opts: Options, body: TransactionCreateOptions): Promise<Transaction>;

      /**
       * Makes a request to /transactions or to /transactions/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/reference#retornando-transa%C3%A7%C3%B5es)
       */
      function find<T extends TransactionFindOptions>(
        opts: Options,
        body: T
      ): Promise<
        T extends TransactionFindOptions ? Transaction[] : Transaction
      >;

      /**
       * Refunds a transaction from the given id.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/reference#estorno-de-transa%C3%A7%C3%A3o)
       */
      function refund(body: TransactionRefundOptions): Promise<Transaction>;
      /**
       * Refunds a transaction from the given id.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/reference#estorno-de-transa%C3%A7%C3%A3o)
       */
      function refund(opts: Options, body: TransactionRefundOptions): Promise<Transaction>;

      /**
       * Reprocess a transaction from the given id.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body 
       */
      function reprocess(opts: Options, body: TransactionReprocessOptions): Promise<any>;

      /**
       * Updates a transaction from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request.
       */
      function update(opts: Options, body: TransactionUpdateOptions): Promise<any>;
    }
  }
}
