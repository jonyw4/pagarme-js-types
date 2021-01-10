

  /**
   * This method validates the properties supplied in the object.
   *
   *
   * @param {Object} [body] An object that contains all properties to
   *                        be validated.
   * @param {(String|String[]|Number|Number[])} [body.cnpj] A CNPJ, or an array
   *                                                        of CNPJs, to be
   *                                                        validated.
   * @param {(String|String[]|Number|Number[])} [body.cpf] A CPF, or an array of
   *                                                       CPFs, to be
   *                                                       validated.
   * @param {(String|String[]|Number|Number[])} [body.ddd] A DDD, or an array of
   *                                                       DDDs, to be validated.
   * @param {(String|String[]|Number|Number[])} [body.zipcode] A zipcode, or an
   *                                                           array of zipcodes,
   *                                                           to be validated.
   * @param {(String|String[]|Number|Number[])} [body.phone] A phone number, or
   *                                                         an array of phones,
   *                                                         to be validated.
   *
   *
   * @param {Object|Object[]} [body.card] A card, or an array of cards, to be
   *                                      validated.
   * @param {String} [body.card.card_holder_name] The card's holder name.
   * @param {(String|Number)} [body.card.card_number] The card's number.
   * @param {(String|Number)} [body.card.card_cvv] The card's CVV.
   * @param {(String|Number)} [body.card.card_expiration_date] The card's
   *                                                           expiratation date.
   *
   * @returns {Object} An object that returns each of the supplied properties
   *                   with true or false, indicating if the supplied value is valid
   *                   or invalid.
   *
   * References:
   * - https://pagarme.github.io/pagarme-js/module-validations.html
   * - https://pagarme.github.io/pagarme-js/validations_index.js.html#line69
   */
  export function validate(body: ): {
    cnpj?: boolean;
    cpf?: boolean;
    ddd?: boolean;
    zipcode?: boolean;
    phone?: boolean;
    card?: {
      brand: string;
      card_holder_name: boolean;
      card_number: boolean;
      card_cvv: boolean;
      card_expiration_date: boolean;
    };
  };

  export interface RefundsArgs {
    /** Filtro pelo ID da transação */
    transaction_id?: string;
    /**
     * Filtro pela data de criação do estorno
     *
     * É importante notar que serão retornados apenas os dados referentes a estornos criados à partir de 08/05/2017.
     * */
    date_created?: string;
    /** Filtro pela data de atualização do estorno */
    date_updated?: string;
  }

  interface TransactionRefundBoletoDataArgs {
    /** Objeto bank_account que contém os dados da conta bancária para onde o estorno será feito. */
    bank_account: {
      /** Dígitos que identificam cada banco. Confira a lista dos bancos aqui: http://www.febraban.org.br/associados/utilitarios/Bancos.asp */
      bank_code: string;
      /** Número da agência bancária */
      agencia: string;
      /** Dígito verificador da agência. Obrigatório caso o banco o utilize. Apenas números, deve conter somente 1 dígito */
      agencia_dv: string;
      /** Número da conta */
      conta: string;
      /** Dígito verificador da conta. */
      conta_dv: string;
      /** Tipo da conta bancária. */
      type:
        | 'conta_corrente'
        | 'conta_poupanca'
        | 'conta_corrente_conjunta'
        | 'conta_poupanca_conjunta';
      /** CPF ou CNPJ do favorecido */
      document_number: string;
      /** Nome/razão social do favorecido, Até 30 caracteres */
      legal_name: string;
    };
  }
  interface TransactionRefundBoletoWithIdArgs {
    /** ID da conta bancária. */
    bank_account_id: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface TransactionRefundCreditCardArgs {}

  export interface TransactionRefundDefaultArgs {
    /** The transaction ID. */
    id: number;
    /** Valor desejado para o estorno da transação. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. */
    amount?: number;
    /** Define se a operação deve ser feita de maneira assíncrona ou não. Caso true(default), a reposta de sua request será enviada via post para sua postback_url cadastrada na respectiva transação. Caso false, no response será enviado o status final de refunded. */
    async?: boolean;
    /** Você pode passar dados adicionais no estorno da transação para facilitar uma futura análise de dados por seus sistemas. */
    metadata?: string;
  }
  export type TransactionRefundDynamicArgs =
    | TransactionRefundCreditCardArgs
    | (TransactionRefundBoletoWithIdArgs | TransactionRefundBoletoDataArgs);
  export type TransactionRefundArgs = TransactionRefundDefaultArgs &
    TransactionRefundDynamicArgs;

  interface TransactionFindAll {
    /** Retorna n objetos de transação, com um máximo de 1000 */
    count?: number;
    /** Útil para implementação de uma paginação de resultados */
    page?: number;
    status?: TransactionStatus;
    /** utiliza unixTimeStamp */
    date_created?: string;
    /** utiliza unixTimeStamp */
    date_updated?: string;
    amount?: string;
    installments?: string;
    tid?: string;
    nsu?: string;
    card_holder_name?: string;
    card_last_digits?: string;
    card_brand?: string;
    postback_url?: string;
    payment_method?: string;
    capture_method?: string;
    boleto_url?: string;
    antifraud_score?: string;
    subscription_id?: string;
    customer?: Partial<CustomerInput>;
    address?: Partial<Address>;
    phone?: PhoneNumber;
    reference_key?: string;
    order_id?: string;
    metadata?: JSON;
  }
  interface TransactionFindById {
    /** The transaction ID. If not sent a transaction list will be returned instead. */
    id: number;
  }
  type TransactionFindArgs = TransactionFindById | TransactionFindAll;

  interface CalculateInstallmentsAmountInput {
    /** The interest rate's value. */
    interest_rate: number;
    /**  The value of the purchase. */
    amount: number;
    /** The max number of installments. */
    max_installments?: number;
    /** The number of installments without interest. */
    free_installments?: number;
  }

  interface CalculateInstallmentsAmount {
    installments: {
      [key: string]: Installment;
    };
  }

  interface Installment {
    installment: number;
    amount: number;
    installment_amount: number;
  }

  /**
   * -------------------------------------------
   * |                   WIP                   |
   * -------------------------------------------
   */

  export interface Authentication {
    api_key: string;
  }

  // CONTA BANCARIA

  export interface CreateContaBancaria {
    agencia: string;
    agencia_dv?: string;
    bank_code: string;
    conta: string;
    conta_dv: string;
    document_number: string;
    legal_name: string;
  }

  export interface ContaBancaria {
    object: string;
    id: number;
    bank_code: string;
    agencia: string;
    agencia_dv: string;
    conta: string;
    conta_dv: string;
    type: string;
    document_type: string;
    document_number: string;
    legal_name: string;
    charge_transfer_fees: boolean;
    date_created: Date;
  }

  export interface PhoneNumber {
    ddd: string;
    number: string;
    type: string;
  }

  export interface RegisterInformationInput {
    type: 'individual';
    document_number: string;
    name: string;
    site_url?: string;
    email: string;
    phone_numbers?: PhoneNumber[];
  }

  export interface CreateRecebedor {
    transfer_interval: string;
    transfer_day: string;
    transfer_enabled: boolean;
    bank_account_id?: string;
    anticipatable_volume_percentage?: string;
    automatic_anticipation_enabled?: string;
    postback_url?: string;
    register_information?: RegisterInformationInput;
  }
  type UpdateRecebedor = {
    recipient_id: string;
  } & Partial<CreateRecebedor>;

  export interface BankAccount {
    object: string;
    id: number;
    bank_code: string;
    agencia: string;
    agencia_dv?: any;
    conta: string;
    conta_dv: string;
    type: string;
    document_type: string;
    document_number: string;
    legal_name: string;
    charge_transfer_fees: boolean;
    date_created: Date;
  }

  interface SplitRuleArg {
    liable: boolean;
    charge_processing_fee: boolean;
    amount: number;
    recipient_id: string;
  }

  export interface Recebedor {
    object: string;
    id: string;
    transfer_enabled: boolean;
    last_transfer?: any;
    transfer_interval: string;
    transfer_day: number;
    automatic_anticipation_enabled: boolean;
    anticipatable_volume_percentage: number;
    date_created: Date;
    date_updated: Date;
    postback_url: string;
    status: string;
    status_reason?: any;
    metadata?: any;
    bank_account: BankAccount;
  }

  interface CaptureArgs {
    /** Id ou o token da transação a ser capturada */
    id: string;
    /** Valor a ser capturado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. */
    amount: number;
    /** Regras de divisão da transação */
    split_rules?: SplitRuleArg[];
  }

  interface Recebivel {
    object: 'payable';
    id: number | string;
    status: 'waiting_funds' | 'prepaid' | 'paid' | 'suspended';
    amount: string;
    fee: string;
    anticipation_fee?: number | string;
    installment: number | string;
    transaction_id: number | string;
    split_rule_id: string;
    bulk_anticipation_id?: string;
    recipient_id: string;
    payment_date: string;
    original_payment_date: string;
    type:
      | 'credit'
      | 'refund'
      | 'refund_reversal'
      | 'chargeback'
      | 'chargeback_refund'
      | 'block'
      | 'unblock';
    payment_method: 'credit_card' | 'debit_card' | 'boleto';
    accrual_date: string;
    date_created: string;
  }

  interface FindRecebivelArg {
    transaction_id: string;
  }

  interface FindRecebiveisArgs {
    createdAt?: string;
    amount?: string;
    recipient_id?: string;
    status?: 'paid' | 'waiting_funds';
    installment?: string;
    transaction_id?: string;
    payment_date?: string;
    type?: 'chargeback' | 'refund' | 'chargeback_refund' | 'credit';
    id?: string;
    count: number;
    page: number;
  }

  interface TransferenciaInput {
    amount: string;
    recipientId: string;
    metaData?: JSON;
  }

  interface TransferenciaObject {
    object: 'transfer';
    Id: number | string;
    Amount: number | string;
    Type: 'ted' | 'doc' | 'credito_em_conta';
    Status:
      | 'pending_transfer'
      | 'transferred'
      | 'failed'
      | 'processing'
      | 'canceled';
    Fee: number | string;
    Funding_date: string;
    Funding_estimated_date: string;
    transaction_id: number | string;
    Bank_account: ContaBancaria;
    Date_created: string;
    metadata: JSON;
  }

  interface FindAllTransfersArgs {
    count: number;
    page: number;
    bank_account_id?: string;
    amount?: string;
    recipient_id?: string;
    id?: string;
    date_created?: string;
    created_at?: string;
  }

  interface BalanceFindInput {
    recipientId: string;
  }

  interface BalanceObject {
    object: 'balance';
    waiting_funds: { amount: number | string };
    available: { amount: number | string };
    transferred: { amount: number | string };
  }

  interface BalanceOperation {
    Object: 'balance_operation';
    id: string;
    status: 'waiting_funds' | 'available' | 'transferred';
    balance_amount: number;
    type: 'payable' | 'anticipation' | 'transfer';
    amount: number;
    fee: number;
    date_created: string;
    movement_object: TransferenciaObject | Recebivel;
  }

  interface FindAllBalanceOperations {
    count: number;
    page: number;
    status?: 'waiting_funds' | 'available' | 'transferred';
    start_date?: number;
    end_date?: number;
  }

  interface SearchOutput<T = unknown> {
    _shards: {
      total: number;
      successful: number;
      failed: number;
    };
    hits: {
      total: number;
      max_score: number;
      hits: {
        _index: string;
        _type: string;
        _id: string;
        _score: number;
        _source: T;
      }[];
    };
    timed_out: boolean;
    took: number;
  }

  interface SearchQuery {
    type: 'transaction' | 'subscription' | 'bank_account' | 'customer';
    query: Record<string, unknown> | string;
    search_type?: string;
  }
}
