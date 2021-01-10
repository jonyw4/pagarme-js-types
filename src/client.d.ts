declare module 'pagarme' {
  export namespace client {
    /**
     * Returns a version of client with authentication data binded to the resource requests.
     *
     * @example
     * // API Key Authentication
     * pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
     *
     * // Encryption Key Authentication
     * pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
     *
     * // Login Authentication
     * pagarme.client.connect({ email: '', password: '' })
     *
     * @param {Object} authentication
     * @returns {Promise} A Promise that resolves to a client with authentication data binded
     *
     * References:
     * - https://pagarme.github.io/pagarme-js/module-client.html#~connect
     * - https://pagarme.github.io/pagarme-js/client_index.js.html#line88
     */
    function connect(authentication: {
      api_key?: string;
      encryption_key?: string;
      email?: string;
      password?: string;
    }): Promise<typeof client>;

    function search<T, Q extends SearchQuery>(
      query: Q
    ): Promise<
      SearchOutput<
        Q extends { type: 'customer' }
          ? Customer
          : Q extends { type: 'transaction' }
          ? Transaction
          : Q extends { type: 'subscription' }
          ? Subscription
          : Q extends { type: 'bank_account' }
          ? BankAccount
          : T
      >
    >;

    function status(opts: any): any;

    function versions(opts: any): any;

    namespace acquirers {
      function all(opts: any, pagination: any): any;

      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      function update(opts: any, body: any): any;
    }

    namespace acquirersConfigurations {
      function all(opts: any, pagination: any): any;

      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      function update(opts: any, body: any): any;
    }

    namespace antifraudAnalyses {
      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;
    }

    namespace balance {
      function find(opts: BalanceFindInput): Promise<BalanceObject>;

      function primary(opts: any): any;
    }

    namespace balanceOperations {
      function all(arg: FindAllBalanceOperations): Promise<BalanceOperation>;

      function days(opts: any, body: any): any;

      function find(opts: any, body: any): any;
    }

    namespace bankAccounts {
      function all(opts: any, body: any): any;

      function create(opts: CreateContaBancaria): Promise<ContaBancaria>;

      function find(opts: any): Promise<ContaBancaria>;
    }

    namespace bulkAnticipations {
      function all(opts: any, body: any): any;

      function cancel(opts: any, body: any): any;

      function confirm(opts: any, body: any): any;

      function create(opts: any, body: any): any;

      function days(opts: any, body: any): any;

      function destroy(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function limits(opts: any, body: any): any;

      function update(opts: any, body: any): any;
    }

    namespace cards {
      function all(opts: any, pagination: any): any;

      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;
    }

    namespace chargebackOperations {
      function find(a0: any, a1: any, ...args: any[]): any;
    }

    namespace chargebacks {
      function find(opts: any, query: any): any;
    }

    namespace company {
      function activate(opts: any): any;

      function affiliationProgress(opts: any): any;

      function create(opts: any, body: any): any;

      function createTemporary(opts: any, body: any): any;

      function current(opts: any): any;

      function resetKeys(opts: any): any;

      function update(opts: any, body: any): any;

      function updateBranding(opts: any, body: any): any;

      namespace emailTemplates {
        function find(opts: any, body: any): any;

        function update(opts: any, body: any): any;
      }
    }

    namespace customers {
      function all(opts: any, body: any): Promise<Customer[]>;

      function create(body: CustomerInput): Promise<Customer>;

      function find(opts: any, body: any): Promise<Customer>;
    }

    namespace events {
      function find(opts: any, body: any): any;

      function findCustom(opts: any, body: any): any;
    }

    namespace gatewayOperations {
      function find(opts: any, body: any): any;

      function refuseMessage(opts: any, body: any): any;
    }

    namespace invites {
      function all(opts: any): any;

      function create(opts: any, body: any): any;

      function destroy(opts: any, body: any): any;

      function find(opts: any, ...args: any[]): any;
    }

    namespace orders {
      function all(opts: any, body: any): any;
    }

    namespace payables {
      function all(args: FindRecebiveisArgs): Promise<Recebivel[]>;

      function days(opts: any, body: any): any;

      function find(opts: FindRecebivelArg): Promise<Recebivel[]>;
    }

    namespace paymentLinks {
      function all(opts: any, body: any): any;

      function cancel(opts: any, body: any): any;

      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;
    }

    namespace plans {
      function all(opts: any, pagination: any): any;

      function create(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      function update(opts: any, body: any): any;
    }

    namespace postback {
      function calculateSignature(
        /** the keys used to sign the hash. */
        key: string,
        /** The string to be hashed. */
        string: string
      ): string;

      function verifySignature(
        /** the keys used to sign the hash. */
        key: string,
        /** The string to be hashed. */
        string: string,
        /** The expected result. */
        expected: string
      ): boolean;
    }

    namespace postbacks {
      function find(opts: any, body: any): any;

      function redeliver(opts: any, body: any): any;
    }

    namespace recipients {
      function all(opts: any, body: any): any;

      function create(opts: CreateRecebedor): Promise<Recebedor>;

      function find(opts: any): any;

      function update(opts: UpdateRecebedor): Promise<Recebedor>;
    }

    namespace refunds {
      function find(opts: any, body: RefundsArgs): Promise<Refund[]>;
      function cancel(opts: any, body: any): any;
    }

    namespace reprocessedTransactions {
      function find(opts: any, query: any): any;
    }

    interface ICard {
      card_holder_name: string;
      card_expiration_date: string;
      card_number: string;
      card_cvv: string;
    }

    namespace security {
      function encrypt(card: ICard): Promise<string>;

      function sign(opts: any, string: any): any;

      function verify(opts: any, string: any, expected: any): any;
    }

    namespace session {
      function create(opts: any, email: any, password: any): any;

      function destroy(opts: any, id: any): any;

      function verify(opts: any, payload: any): any;
    }

    namespace splitRules {
      function find(opts: any, body: any): any;
    }

    namespace subscriptions {
      function all(opts: any, body: any): any;

      function cancel(opts: any, body: any): any;

      function create(opts: any, body: any): any;

      function createTransaction(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      function findTransactions(opts: any, body: any): any;

      function settleCharge(opts: any, body: any): any;

      function update(opts: any, body: any): any;
    }

    namespace transactions {
      function all(opts: any, body: TransactionFindAll): Promise<Transaction[]>;

      function calculateInstallmentsAmount(
        opts: any,
        body: CalculateInstallmentsAmountInput
      ): Promise<CalculateInstallmentsAmount>;

      function capture(opts: CaptureArgs): Promise<Transaction>;

      function cardHashKey(opts: any): any;

      function collectPayment(opts: any, body: any): any;

      function create(opts: CreateTransactionInput): Promise<Transaction>;

      function find<T extends TransactionFindArgs>(
        opts: any,
        body: T
      ): Promise<T extends TransactionFindAll ? Transaction[] : Transaction>;

      function refund(
        opts: any,
        body: TransactionRefundArgs
      ): Promise<Transaction>;

      function reprocess(opts: any, body: any): any;

      function update(opts: any, body: any): any;
    }

    namespace transfers {
      function all(args: FindAllTransfersArgs): Promise<TransferenciaObject[]>;

      function cancel(opts: any, body: any): any;

      function create(opts: TransferenciaInput): Promise<TransferenciaObject>;

      function days(opts: any): any;

      function find(opts: any, body: any): any;

      function limits(opts: any, params: any): any;
    }

    namespace user {
      function all(opts: any, body: any): any;

      function create(opts: any, body: any): any;

      function current(opts: any): any;

      function destroy(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function redefinePassword(opts: any, body: any): any;

      function resetPassword(opts: any, body: any): any;

      function update(opts: any, body: any): any;

      function updatePassword(opts: any, body: any): any;
    }

    namespace zipcodes {
      function find(a0: any, a1: any, ...args: any[]): any;
    }
  }
}
