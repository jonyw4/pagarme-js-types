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
  export function validate(body: {
    cnpj?: string | string[] | number | number[];
    cpf?: string | string[] | number | number[];
    ddd?: string | string[] | number | number[];
    zipcode?: string | string[] | number | number[];
    phone?: string | string[] | number | number[];
    card?: {
      card_holder_name: string;
      card_number: string | number;
      card_cvv: string | number;
      card_expiration_date: string | number;
    };
  }): {
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
  export interface Refund {
    object: 'refund';
    /** Número identificador do estorno. */
    id: string;
    /** Valor, em centavos, do estorno. Exemplo: R$100,00 = 10000 */
    amount: number;
    /** Tipo de pagamento da transação estornada. */
    type: 'credit_card' | 'debit_card' | 'boleto';
    /** Representa o estado do estorno. */
    status: 'refunded' | 'pending_refund';
    /** Número identificador do recebedor responsável pela taxa de processamento. */
    charge_fee_recipient_id: string;
    /** Número identificador da conta bancária de destino do estorno. */
    bank_account_id: number;
    /** Número identificador da transação estornada. */
    transaction_id: number;
    /** Data de criação do estorno no formato ISODate */
    date_created: string;
    /** Objeto com dados adicionais informados na criação do estorno. */
    metadata: JSON;
  }

  export interface Address {
    /** País. Duas letras minúsculas. Deve seguir o padrão `ISO 3166-1 alpha-2` */
    country: string;
    /** Estado */
    state: string;
    /** Cidade */
    city: string;
    /** Rua */
    street: string;
    /** Número */
    street_number: string;
    /** Cidade */
    zipcode: string;
    /** Bairro */
    neighborhood?: string;
    /** Complemento. **Não pode ser uma string vazia** nem null */
    complementary: string;
  }

  export type CustomerType = 'individual' | 'corporation' | 'other';
  export type DocumentType = 'cpf' | 'cnpj' | 'passaporte' | 'other';

  export interface Document {
    /** Tipo de documento. Para compradores brasileiros, deve ser fornecido ao menos um CPF (no caso de pessoa física, i.e. `individual`) ou CNPJ (no caso de pessoa jurídica, i.e. `corporation`). Para compradores internacionais, o documento pode ser um passaporte (type `passport`) ou um campo personalizado (type `other`). */
    type: DocumentType;
    /** Número do documento */
    number: string;
  }

  export interface CustomerInput {
    external_id: string;
    /** Nome ou razão social do comprador */
    name: string;
    /** Tipo de documento. Deve ser `individual` para pessoa física ou `corporation` para pessoa jurídica */
    type: CustomerType;
    /** País */
    country: Country;
    /** E-mail do comprador */
    email: string;
    /** Documento. Contém campos type para tipo de documento e number para número do documento. */
    documents: Document[];
    /** Números de telefone. Requer ao menos um valor. Deve seguir o padrão *E.164* */
    phone_numbers: string[];
    /** Data de nascimento */
    birthday?: string;
  }

  export interface Customer extends CustomerInput {
    /** Identificador do cliente na loja */
    id: string;
    /** Lista dos telefones relacionados ao cliente */
    phones: string[];
    /** Lista de endereços relacionados ao cliente */
    addresses: Address[];
  }

  export interface ShippingInput {
    /** Nome da entidade de cobrança */
    name: string;
    /** Taxa de envio cobrada do comprador. Por exemplo, se a taxa de envio é de dez reais e três centavos (R$10,03), o valor deve ser fornecido como ‘1003’ */
    fee: number;
    /** Data de entrega. Estimativa fornecida no formato AAAA-MM-DD */
    delivery_date?: string;
    /** Entrega expressa. Se for entrega expressa, deve conter ‘true’ (sim). Caso contrário, deve conter ‘false’ (não) */
    expedited?: boolean;
    /** Obrigatório. Dados do endereço de envio. Objeto descrito aqui. */
    address: Address;
  }

  export interface ItemInput {
    /** SKU (unidade de manutenção de estoque) ou número de identificação na loja */
    id: string;
    /** Nome do item vendido. */
    title: string;
    /** Preço por unidade. Por exemplo, se o preço de cada item é vinte reais e seis centavos (R$20,06), o valor deve ser fornecido como ‘2006’ */
    unit_price: number;
    /** Número de unidades vendidas do produto */
    quantity: number;
    /** Caracteriza o produto como bem físico ou não. Por bem físico, entende-se produtos que devem ser enviados fisicamente ao comprador, como calçados, eletrônicos e brinquedos. Se for um bem físico deve conter true (sim). Caso contrário, deve conter false (não) */
    tangible: boolean;
    /** Categoria */
    category?: string;
    /** Local */
    venue?: string;
    /** Data Estimativa fornecida no formato AAAA-MM-DD */
    date?: string;
  }

  export interface CreateTransactionPixInput {
    payment_method: 'pix';
    /** Deve ser informada a data de expiração do Pix. Aceitaremos os
    formatos ISO 8601 (YYYY-MM-DD) para Pix com expiração até o fim do dia e RFC3339
    (YYYY-MM-DDThh:mm:ss) quando o Pix deva ser encerrado em algum horário específico
    do dia */
    pix_expiration_date: string;
    /** campos que serão exibidos como soft descriptors ao pagador */
    pix_additional_fields: {
      name: string;
      value: string;
    }[];
  }

  export interface CreateTransactionBoletoInput {
    payment_method: 'boleto';
    boleto_fine?: {
      /** Dias após a expiração do boleto quando a multa deve ser cobrada. */
      days?: string;
      /** Valor em centavos da multa. **Valor máximo de 2% do valor do documento.** */
      amount?: string;
    };
    boleto_interest?: {
      /** Dias após a expiração do boleto quando o juros deve ser cobrado. */
      days?: string;
      /** Valor em porcentagem da taxa de juros que será cobrado por dia. **Valor máximo de 1% ao mês.** */
      amount?: string;
    };
    /** Prazo limite para pagamento do boleto. Deve ser passado no formato yyyy-MM-dd.Default: data atual + 7 dias */
    boleto_expiration_date?: string;
    /** Campo instruções do boleto. Máximo de 255 caracteres */
    boleto_instructions?: string;
  }

  export interface CreateTransactionCreditCartInputBase {
    payment_method: 'credit_card';
  }

  export interface CreateTransactionCreditCartInputWithHash {
    /** Informações do cartão do cliente criptografadas em sua aplicação. **OBS: apenas para transações de Cartão de crédito você deve passar o `card_hash` ou `card_id`. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.** */
    card_hash: string;
  }

  export interface CreateTransactionCreditCartInputWitId {
    /** Ao realizar uma transação, retornamos o card_id do cartão, para que nas próximas transações ele possa ser utilizado como forma de identificar os dados de pagamento. Exemplo de utilização: One-click buy. OBS: apenas para transações de Cartão de crédito você deve passar o card_hash ou card_id. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável. */
    card_id: string;
  }

  export interface CreateTransactionCreditCartInputWitData {
    /** Nome do portador do cartão.  */
    card_holder_name: string;
    /** Data de validade do cartão no formato MMAA. */
    card_expiration_date: string;
    /** Número do cartão. */
    card_number: string;
    /** Código verificador do cartão. */
    card_cvv: string;
  }

  export type CreateTransactionCreditCartInput = CreateTransactionCreditCartInputBase &
    (
      | CreateTransactionCreditCartInputWitData
      | CreateTransactionCreditCartInputWithHash
      | CreateTransactionCreditCartInputWitId
    );

  interface CreateTransactionInputBase {
    /** Valor a ser cobrado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. Deve ser no mínimo 1 real (100) */
    amount: number;
    /** Endpoint do seu sistema que receberá informações a cada atualização da transação. **Caso você defina este parâmetro, o processamento da transação se torna assíncrono.** */
    postback_url?: string;
    /** Utilize false caso queira manter o processamento síncrono de uma transação. Ou seja, a resposta da transação é recebida na hora. */
    async?: boolean;
    /** Número de parcelas da transação, sendo mínimo: 1 e Máximo: 12. OBS: Se o pagamento for boleto, o padrão é 1 */
    installments?: string;
    /** Descrição que aparecerá na fatura depois do nome de sua empresa. Máximo de 13 caracteres, sendo alfanuméricos e espaços. */
    soft_descriptor?: string;
    /** Após a autorização de uma transação, você pode escolher se irá capturar ou adiar a captura do valor. Caso opte por postergar a captura, atribua o valor false. */
    capture?: boolean;
    // TODO: Finalizar tipagem
    /** Regras de divisão da transação */
    split_rules?: Array<any>;
    customer?: CustomerInput | { id: string };
    /** Obrigatório com o antifraude habilitado. Define os dados de cobrança, como nome e endereço */
    billing?: BillingInput;
    /** Deve ser preenchido no caso da venda de bem físico (ver objeto items) */
    shipping?: ShippingInput;
    /** Define os dados dos itens vendidos, como nome, preço unitário e quantidade */
    items?: ItemInput[];
    /** Você pode passar dados adicionais na criação da transação para facilitar uma futura análise de dados tanto em nossa dashboard, quanto por seus sistemas. Ex: metadata[ idProduto ]=13933139 */
    metadata?: string;
    /** Valor único que identifica a transação para permitir uma nova tentativa de requisição com a segurança de que a mesma operação não será executada duas vezes acidentalmente.*/
    reference_key?: string;
    /** Valor único que identifica a sessão do usuário acessando o site. Máximo de 100 caracteres */
    session?: string;
    /** Data e hora do dispositivo que está efetuando a transação. Deve ser enviado no seguinte formato: yyyy-MM-dd'T'HH:mm:ss'Z. Por exemplo: 2017-10-31T14:53:00.000Z. OBS.: este campo é necessário para transações de mundo físico (com método de captura EMV e Magstripe) */
    local_time?: string;
  }

  export type CreateTransactionInput = CreateTransactionInputBase &
    (
      | CreateTransactionCreditCartInput
      | CreateTransactionBoletoInput
      | CreateTransactionPixInput
    );

  type RefuseStatus =
    | 'acquirer'
    | 'antifraud'
    | 'internal_error'
    | 'no_acquirer'
    | 'acquirer_timeout';

  type TransactionStatus =
    | 'processing'
    | 'authorized'
    | 'paid'
    | 'refunded'
    | 'waiting_payment'
    | 'pending_refund'
    | 'refused'
    | 'chargedback'
    | 'analyzing'
    | 'pending_review';

  interface Transaction {
    /** Nome do tipo do objeto criado/modificado. */
    object: 'transaction';
    /** Representa o estado da transação. A cada atualização no processamento da transação, esta propriedade é alterada e, caso você esteja usando uma postback_url, os seus servidores são notificados desses updates. */
    status: TransactionStatus;
    /** Motivo pelo qual a transação foi recusada. */
    refuse_reason?: RefuseStatus;
    /** Agente responsável pela validação ou anulação da transação. */
    status_reason: RefuseStatus;
    /** Adquirente responsável pelo processamento da transação. */
    acquirer_name: 'development' | 'pagarme' | 'stone' | 'cielo' | 'rede';
    /** ID da adquirente responsável pelo processamento da transação. */
    acquirer_id: string;
    /** Mensagem de resposta da adquirente referente ao status da transação. */
    acquirer_response_code: string;
    /** Código de autorização retornado pela bandeira. */
    authorization_code: string;
    /** Texto que irá aparecer na fatura do cliente depois do nome da loja. */
    soft_descriptor: string;
    /** Código que identifica a transação na adquirente. */
    tid: string;
    /** Código que identifica a transação na adquirente. */
    nsu: string;
    /** Data de criação da transação no formato ISODate */
    date_created: string;
    /** Data de atualização  da transação no formato ISODate */
    date_updated: string;
    /** Valor, em centavos, da transação. Ex: 100,00 = 10000 */
    amount: number;
    /** Valor em centavos autorizado na transação, sempre menor ou igual a `amount`. */
    authorized_amount: number;
    /** Valor em centavos capturado na transação, sempre menor ou igual a `authorized_amount`. */
    paid_amount: number;
    /** Valor em centavos estornado até o momento na transação, sempre menor ou igual a `paidamount`. */
    refunded_amount: number;
    /** Número de parcelas a serem cobradas. */
    installments: number;
    /** Número identificador da transação */
    id: number;
    /** Custo da transação para o lojista, envolvendo processamento e antifraude. */
    cost: number;
    /** Nome do portador do cartão. */
    card_holder_name: string;
    /** Últimos 4 dígitos do cartão. */
    card_last_digits: string;
    /** ÚPrimeiros 5 dígitos do cartão */
    card_first_digits: string;
    /** Bandeira do cartão. */
    card_brand: string;
    /** Usado em transações EMV, define se a validação do cartão aconteceu online(com banco emissor), ou offline( através do chip). */
    card_pin_mode: string;
    /** URL (endpoint) de seu sistema que recebe notificações a cada mudança no status da transação. */
    postback_url: string;
    /** Método de pagamento */
    payment_method: 'credit_card' | 'boleto' | 'pix';
    pix_qrcode: string;
    pix_expiration_date: string;
    pix_additional_fields: string;
    /** Define qual foi a forma de captura dos dados de pagamento. */
    capture_method: 'magstripe' | 'emv' | 'ecommerce';
    /** Define qual foi a nota de antifraude atribuída a transação. Lembrando que por padrão, transações com score >= 95 são recusadas. */
    antifraud_score: string;
    /** URL do boleto para impressão */
    boleto_url: string;
    /** Código de barras do boleto gerado na transação */
    boleto_barcode: string;
    /** Data de expiração do boleto (em ISODate) */
    boleto_expiration_date: string;
    /** Mostra se a transação foi criada utilizando a API Key ou Encryption Key */
    referer: string;
    /** IP de origem que criou a transação, podendo ser diretamente de seu cliente, caso a requisição venha diretamente do client-side, ou de seus servidores, caso tudo esteja centralizando em sua aplicação no server-side. */
    ip: string;
    /** Caso essa transação tenha sido originada na cobrança de uma assinatura, o id desta será o valor dessa propriedade. */
    subscription_id: string;
    customer: CustomerInput;
    billing: BillingInput;
    shipping: ShippingInput;
    items: ItemInput[];
    address: Address;
    documents: Document[];
    /** Objeto com dados adicionais informados na criação da transação. */
    metadata: any;
    /** Objeto com as regras de split definidas para essa transação. */
    split_rules: any;
    /** Objeto com dados usados na integração com antifraude. */
    antifraud_metadata: any;
    /** Valor único que identifica a sessão do usuário acessando o site */
    session: string;
    /** Valor único que identifica a transação para permitir uma nova tentativa de requisição com a segurança de que a mesma operação não será executada duas vezes acidentalmente. */
    reference_key: string;
  }
  // TODO: Atualizar tipagem transaction | subscription
  export interface Postback {
    /** ID da transação. */
    id: number;
    /** A qual evento o postback se refere.  */
    event: 'transaction_status_changed' | 'subscription_status_changed';
    /** Status anterior da transação. */
    old_status: TransactionStatus;
    /** Status ideal para objetos deste tipo, em um fluxo normal, onde autorização e captura são feitos com sucesso, por exemplo. */
    desired_status: TransactionStatus;
    /** Status para o qual efetivamente mudou. */
    current_status: TransactionStatus;
    /** Qual o tipo do objeto referido.  */
    object: 'transaction' | 'subscription';
    /** Possui todas as informações do objeto.  */
    transaction: Transaction;
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
      type: ContaBancariaTypes;
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

  export interface BillingInput {
    name: string;
    address: Address;
  }

  // CONTA BANCARIA

  /**
   * Cria uma conta bancária para futuros pagamentos.
   * https://docs.pagar.me/reference#criando-uma-conta-banc%C3%A1ria
   *
   * Os bancos aceitos pela Pagar.me são aqueles presentes na Febraban. A lista completa pode ser encontrada aqui: https://www.bcb.gov.br/pom/spb/estatistica/port/ASTR003.pdf
   *
   * Se a agência de sua conta não possuir dv, basta não adicionar a chave agencia_dv na request.
   */
  export interface CreateContaBancaria {
    /** Agência onde sua conta foi criada OBS: Limite de 4 caracteres, apenas números */
    agencia: string;
    /** Dígito verificador da sua agência OBS: Deve conter 1 dígito, apenas alfanuméricos */
    agencia_dv?: string;
    /** Código do banco OBS: Deve conter 3 caracteres, apenas números */
    bank_code: string;
    /** Número da conta bancária OBS: Limite de 13 caracteres, apenas números */
    conta: string;
    /** Dígito verificador da conta OBS: Limite de 2 caracteres, apenas alfanuméricos */
    conta_dv: string;
    /** Documento identificador do titular da conta (cpf ou cnpj) Ex: 35146484252 */
    document_number: string;
    /** Nome completo (se pessoa física) ou razão social (se pessoa jurídica). Até 30 caractéres */
    legal_name: string;
    /** Tipo de conta bancária, valores possíveis: conta_corrente, conta_poupanca, conta_corrente_conjunta, conta_poupanca_conjunta */
    type?: ContaBancariaTypes;
  }

  export type ContaBancariaTypes =
    | 'conta_corrente'
    | 'conta_poupanca'
    | 'conta_corrente_conjunta'
    | 'conta_poupanca_conjunta';

  export interface ContaBancaria {
    object: string;
    id: number;
    bank_code: string;
    agencia: string;
    agencia_dv: string;
    conta: string;
    conta_dv: string;
    type: ContaBancariaTypes;
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

  /** https://docs.pagar.me/reference#objeto-recebedor-1 */
  interface RegisterInformationInputIndividual {
    /** Utilizar "individual". */
    type: string;
    /** Número do CPF. */
    document_number: string;
    /** Nome do seller. */
    name: string;
    /** Site do seller. */
    site_url?: string;
    /** Email do seller */
    email: string;
    /** Número de telefone do seller. Deve-se informar o DDD, número e o tipo. */
    phone_numbers?: PhoneNumber[];
  }

  /** https://docs.pagar.me/reference#objeto-recebedor-1 */
  interface RegisterInformationInputCorporation {
    /** Utilizar "corporation" */
    type: string;
    /** Número do CNPJ. */
    document_number: string;
    /** Nome fantasia do seller. */
    company_name: string;
    /** Email do seller */
    email?: string;
    /** Site do seller. */
    site_url?: string;
    /** Número de telefone do seller. Deve-se informar o DDD, número e o tipo. */
    phone_numbers?: PhoneNumber[];
    /** Dados dos sócios listados neste CNPJ. */
    managing_partners?: {
      type: string;
      document_number: string;
      email: string;
      name: string;
    }[];
  }

  type RegisterInformationInput =
    | RegisterInformationInputIndividual
    | RegisterInformationInputCorporation;

  /**
   * Com essa rota você consegue criar um recebedor, definindo o período que ele irá receber os pagamentos e qual a conta bancária que será utilizada para envio dos pagamentos.
   * https://docs.pagar.me/reference#criando-um-recebedor
   *
   * Recebedores inativos - Todos os recebedores que foram criados a mais de 60 dias, não possuem valores a receber e nos últimos 60 dias não transacionaram ou realizaram transferências terão a transferência automática desabilitada. Mesmo que esse recebedor volte a transacionar eventualmente, a transferência automática precisa ser reabilitada manualmente nesses casos.
   */
  export interface CreateRecebedor {
    /** Frequência na qual o recebedor irá ser pago. Valores possíveis: daily, weekly, monthly */
    transfer_interval: string;
    /** Dia no qual o recebedor vai ser pago. Depende do transfer_interval. Se for daily, não é necessário. Se for weekly pode ser de 1 (segunda) a 5 (sexta). Se for monthly, pode ser de 1 a 31. */
    transfer_day: string;
    /** Variável que indica se o recebedor pode receber os pagamentos automaticamente */
    transfer_enabled: boolean;
    /** Identificador de uma conta bancária previamente criada. Você também pode passar todos parâmetros necessários para criação de uma conta bancária. */
    bank_account_id?: string;
    bank_account?: CreateContaBancaria;
    /** Porcentagem do valor passível de antecipação para este recebedor. */
    anticipatable_volume_percentage?: string;
    /** Se o recebedor está habilitado para receber automaticamente ou não o valor disponível para antecipação. */
    automatic_anticipation_enabled?: string;
    /** Configuração de como devemos criar as antecipações automáticas do recebedor. Valor full para criarmos antecipações seguindo a regra de volume máximo antecipável. Valor 1025, para criarmos antecipações de vendas inteiras, modelos D+X e 10/25. */
    automatic_anticipation_type?: string;
    /** Lista de dias em que devemos criar as antecipações automáticas. */
    automatic_anticipation_days?: string;
    /** Parâmetro de quantos dias, contados do dia da antecipação para trás, devemos desconsiderar na criação desta antecipação. */
    automatic_anticipation_1025_delay?: string;
    /** URL (endpoint) de seu sistema que recebe notificações a cada mudança no status do recebedor. */
    postback_url?: string;
    /** Campo usado para receber informações cadastrais de um recebedor. Este recebedor pode ser pessoal física ou pessoa jurídica, onde cada um tem formato especifico. */
    register_information?: RegisterInformationInput;
    /** Objeto com dados adicionais do recebedor. */
    metadata: object;
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

  enum Country {
    Af = 'af',
    Al = 'al',
    Dz = 'dz',
    As = 'as',
    Ad = 'ad',
    Ao = 'ao',
    Ai = 'ai',
    Aq = 'aq',
    Ag = 'ag',
    Ar = 'ar',
    Am = 'am',
    Aw = 'aw',
    Au = 'au',
    At = 'at',
    Az = 'az',
    Bs = 'bs',
    Bh = 'bh',
    Bd = 'bd',
    Bb = 'bb',
    By = 'by',
    Be = 'be',
    Bz = 'bz',
    Bj = 'bj',
    Bm = 'bm',
    Bt = 'bt',
    Bo = 'bo',
    Ba = 'ba',
    Bw = 'bw',
    Bv = 'bv',
    Br = 'br',
    Io = 'io',
    Bn = 'bn',
    Bg = 'bg',
    Bf = 'bf',
    Bi = 'bi',
    Kh = 'kh',
    Cm = 'cm',
    Ca = 'ca',
    Cv = 'cv',
    Ky = 'ky',
    Cf = 'cf',
    Td = 'td',
    Cl = 'cl',
    Cn = 'cn',
    Cx = 'cx',
    Cc = 'cc',
    Co = 'co',
    Km = 'km',
    Cg = 'cg',
    Cd = 'cd',
    Ck = 'ck',
    Cr = 'cr',
    Ci = 'ci',
    Hr = 'hr',
    Cu = 'cu',
    Cy = 'cy',
    Cz = 'cz',
    Dk = 'dk',
    Dj = 'dj',
    Dm = 'dm',
    Do = 'do',
    Ec = 'ec',
    Eg = 'eg',
    Sv = 'sv',
    Gq = 'gq',
    Er = 'er',
    Ee = 'ee',
    Et = 'et',
    Fk = 'fk',
    Fo = 'fo',
    Fj = 'fj',
    Fi = 'fi',
    Fr = 'fr',
    Gf = 'gf',
    Pf = 'pf',
    Tf = 'tf',
    Ga = 'ga',
    Gm = 'gm',
    Ge = 'ge',
    De = 'de',
    Gh = 'gh',
    Gi = 'gi',
    Gr = 'gr',
    Gl = 'gl',
    Gd = 'gd',
    Gp = 'gp',
    Gu = 'gu',
    Gt = 'gt',
    Gg = 'gg',
    Gn = 'gn',
    Gw = 'gw',
    Gy = 'gy',
    Ht = 'ht',
    Hm = 'hm',
    Va = 'va',
    Hn = 'hn',
    Hk = 'hk',
    Hu = 'hu',
    Is = 'is',
    In = 'in',
    Id = 'id',
    Ir = 'ir',
    Iq = 'iq',
    Ie = 'ie',
    Im = 'im',
    Il = 'il',
    It = 'it',
    Jm = 'jm',
    Jp = 'jp',
    Je = 'je',
    Jo = 'jo',
    Kz = 'kz',
    Ke = 'ke',
    Ki = 'ki',
    Kp = 'kp',
    Kr = 'kr',
    Kw = 'kw',
    Kg = 'kg',
    La = 'la',
    Lv = 'lv',
    Lb = 'lb',
    Ls = 'ls',
    Lr = 'lr',
    Ly = 'ly',
    Li = 'li',
    Lt = 'lt',
    Lu = 'lu',
    Mo = 'mo',
    Mk = 'mk',
    Mg = 'mg',
    Mw = 'mw',
    My = 'my',
    Mv = 'mv',
    Ml = 'ml',
    Mt = 'mt',
    Mh = 'mh',
    Mq = 'mq',
    Mr = 'mr',
    Mu = 'mu',
    Yt = 'yt',
    Mx = 'mx',
    Fm = 'fm',
    Md = 'md',
    Mc = 'mc',
    Mn = 'mn',
    Me = 'me',
    Ms = 'ms',
    Ma = 'ma',
    Mz = 'mz',
    Mm = 'mm',
    Na = 'na',
    Nr = 'nr',
    Np = 'np',
    Nl = 'nl',
    An = 'an',
    Nc = 'nc',
    Nz = 'nz',
    Ni = 'ni',
    Ne = 'ne',
    Ng = 'ng',
    Nu = 'nu',
    Nf = 'nf',
    Mp = 'mp',
    No = 'no',
    Om = 'om',
    Pk = 'pk',
    Pw = 'pw',
    Ps = 'ps',
    Pa = 'pa',
    Pg = 'pg',
    Py = 'py',
    Pe = 'pe',
    Ph = 'ph',
    Pn = 'pn',
    Pl = 'pl',
    Pt = 'pt',
    Pr = 'pr',
    Qa = 'qa',
    Re = 're',
    Ro = 'ro',
    Ru = 'ru',
    Rw = 'rw',
    Sh = 'sh',
    Kn = 'kn',
    Lc = 'lc',
    Pm = 'pm',
    Vc = 'vc',
    Ws = 'ws',
    Sm = 'sm',
    St = 'st',
    Sa = 'sa',
    Sn = 'sn',
    Rs = 'rs',
    Sc = 'sc',
    Sl = 'sl',
    Sg = 'sg',
    Sk = 'sk',
    Si = 'si',
    Sb = 'sb',
    So = 'so',
    Za = 'za',
    Gs = 'gs',
    Es = 'es',
    Lk = 'lk',
    Sd = 'sd',
    Sr = 'sr',
    Sj = 'sj',
    Sz = 'sz',
    Se = 'se',
    Ch = 'ch',
    Sy = 'sy',
    Tw = 'tw',
    Tj = 'tj',
    Tz = 'tz',
    Th = 'th',
    Tl = 'tl',
    Tg = 'tg',
    Tk = 'tk',
    To = 'to',
    Tt = 'tt',
    Tn = 'tn',
    Tr = 'tr',
    Tm = 'tm',
    Tc = 'tc',
    Tv = 'tv',
    Ug = 'ug',
    Ua = 'ua',
    Ae = 'ae',
    Gb = 'gb',
    Us = 'us',
    Um = 'um',
    Uy = 'uy',
    Uz = 'uz',
    Vu = 'vu',
    Ve = 've',
    Vn = 'vn',
    Vg = 'vg',
    Vi = 'vi',
    Wf = 'wf',
    Eh = 'eh',
    Ye = 'ye',
    Zm = 'zm',
    Zw = 'zw'
  }
}
