declare module 'pagarme' {
  export namespace client {
    function connect(authentication: {
      api_key: string;
    }): Promise<typeof client>;

    function search(opts: any, query: any): any;

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

      function create(opts: any, body: CustomerInput): Promise<Customer>;

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

    namespace security {
      function encrypt(opts: any, card: any): any;

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

      function calculateInstallmentsAmount(opts: any, body: any): any;

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

  export type DocumentType = 'individual' | 'corporation' | 'other';

  export interface Document extends Address {
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
    type: DocumentType;
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
    customer: CustomerInput;
    /** Obrigatório com o antifraude habilitado. Define os dados de cobrança, como nome e endereço */
    billing?: BillingInput;
    /** Deve ser preenchido no caso da venda de bem físico (ver objeto items) */
    shipping?: ShippingInput;
    /** Define os dados dos itens vendidos, como nome, preço unitário e quantidade */
    items: ItemInput[];
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
    (CreateTransactionCreditCartInput | CreateTransactionBoletoInput);

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
    payment_method: 'credit_card' | 'boleto';
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
  enum Country {
    Af = 'AF',
    Al = 'AL',
    Dz = 'DZ',
    As = 'AS',
    Ad = 'AD',
    Ao = 'AO',
    Ai = 'AI',
    Aq = 'AQ',
    Ag = 'AG',
    Ar = 'AR',
    Am = 'AM',
    Aw = 'AW',
    Au = 'AU',
    At = 'AT',
    Az = 'AZ',
    Bs = 'BS',
    Bh = 'BH',
    Bd = 'BD',
    Bb = 'BB',
    By = 'BY',
    Be = 'BE',
    Bz = 'BZ',
    Bj = 'BJ',
    Bm = 'BM',
    Bt = 'BT',
    Bo = 'BO',
    Ba = 'BA',
    Bw = 'BW',
    Bv = 'BV',
    Br = 'BR',
    Io = 'IO',
    Bn = 'BN',
    Bg = 'BG',
    Bf = 'BF',
    Bi = 'BI',
    Kh = 'KH',
    Cm = 'CM',
    Ca = 'CA',
    Cv = 'CV',
    Ky = 'KY',
    Cf = 'CF',
    Td = 'TD',
    Cl = 'CL',
    Cn = 'CN',
    Cx = 'CX',
    Cc = 'CC',
    Co = 'CO',
    Km = 'KM',
    Cg = 'CG',
    Cd = 'CD',
    Ck = 'CK',
    Cr = 'CR',
    Ci = 'CI',
    Hr = 'HR',
    Cu = 'CU',
    Cy = 'CY',
    Cz = 'CZ',
    Dk = 'DK',
    Dj = 'DJ',
    Dm = 'DM',
    Do = 'DO',
    Ec = 'EC',
    Eg = 'EG',
    Sv = 'SV',
    Gq = 'GQ',
    Er = 'ER',
    Ee = 'EE',
    Et = 'ET',
    Fk = 'FK',
    Fo = 'FO',
    Fj = 'FJ',
    Fi = 'FI',
    Fr = 'FR',
    Gf = 'GF',
    Pf = 'PF',
    Tf = 'TF',
    Ga = 'GA',
    Gm = 'GM',
    Ge = 'GE',
    De = 'DE',
    Gh = 'GH',
    Gi = 'GI',
    Gr = 'GR',
    Gl = 'GL',
    Gd = 'GD',
    Gp = 'GP',
    Gu = 'GU',
    Gt = 'GT',
    Gg = 'GG',
    Gn = 'GN',
    Gw = 'GW',
    Gy = 'GY',
    Ht = 'HT',
    Hm = 'HM',
    Va = 'VA',
    Hn = 'HN',
    Hk = 'HK',
    Hu = 'HU',
    Is = 'IS',
    In = 'IN',
    Id = 'ID',
    Ir = 'IR',
    Iq = 'IQ',
    Ie = 'IE',
    Im = 'IM',
    Il = 'IL',
    It = 'IT',
    Jm = 'JM',
    Jp = 'JP',
    Je = 'JE',
    Jo = 'JO',
    Kz = 'KZ',
    Ke = 'KE',
    Ki = 'KI',
    Kp = 'KP',
    Kr = 'KR',
    Kw = 'KW',
    Kg = 'KG',
    La = 'LA',
    Lv = 'LV',
    Lb = 'LB',
    Ls = 'LS',
    Lr = 'LR',
    Ly = 'LY',
    Li = 'LI',
    Lt = 'LT',
    Lu = 'LU',
    Mo = 'MO',
    Mk = 'MK',
    Mg = 'MG',
    Mw = 'MW',
    My = 'MY',
    Mv = 'MV',
    Ml = 'ML',
    Mt = 'MT',
    Mh = 'MH',
    Mq = 'MQ',
    Mr = 'MR',
    Mu = 'MU',
    Yt = 'YT',
    Mx = 'MX',
    Fm = 'FM',
    Md = 'MD',
    Mc = 'MC',
    Mn = 'MN',
    Me = 'ME',
    Ms = 'MS',
    Ma = 'MA',
    Mz = 'MZ',
    Mm = 'MM',
    Na = 'NA',
    Nr = 'NR',
    Np = 'NP',
    Nl = 'NL',
    An = 'AN',
    Nc = 'NC',
    Nz = 'NZ',
    Ni = 'NI',
    Ne = 'NE',
    Ng = 'NG',
    Nu = 'NU',
    Nf = 'NF',
    Mp = 'MP',
    No = 'NO',
    Om = 'OM',
    Pk = 'PK',
    Pw = 'PW',
    Ps = 'PS',
    Pa = 'PA',
    Pg = 'PG',
    Py = 'PY',
    Pe = 'PE',
    Ph = 'PH',
    Pn = 'PN',
    Pl = 'PL',
    Pt = 'PT',
    Pr = 'PR',
    Qa = 'QA',
    Re = 'RE',
    Ro = 'RO',
    Ru = 'RU',
    Rw = 'RW',
    Sh = 'SH',
    Kn = 'KN',
    Lc = 'LC',
    Pm = 'PM',
    Vc = 'VC',
    Ws = 'WS',
    Sm = 'SM',
    St = 'ST',
    Sa = 'SA',
    Sn = 'SN',
    Rs = 'RS',
    Sc = 'SC',
    Sl = 'SL',
    Sg = 'SG',
    Sk = 'SK',
    Si = 'SI',
    Sb = 'SB',
    So = 'SO',
    Za = 'ZA',
    Gs = 'GS',
    Es = 'ES',
    Lk = 'LK',
    Sd = 'SD',
    Sr = 'SR',
    Sj = 'SJ',
    Sz = 'SZ',
    Se = 'SE',
    Ch = 'CH',
    Sy = 'SY',
    Tw = 'TW',
    Tj = 'TJ',
    Tz = 'TZ',
    Th = 'TH',
    Tl = 'TL',
    Tg = 'TG',
    Tk = 'TK',
    To = 'TO',
    Tt = 'TT',
    Tn = 'TN',
    Tr = 'TR',
    Tm = 'TM',
    Tc = 'TC',
    Tv = 'TV',
    Ug = 'UG',
    Ua = 'UA',
    Ae = 'AE',
    Gb = 'GB',
    Us = 'US',
    Um = 'UM',
    Uy = 'UY',
    Uz = 'UZ',
    Vu = 'VU',
    Ve = 'VE',
    Vn = 'VN',
    Vg = 'VG',
    Vi = 'VI',
    Wf = 'WF',
    Eh = 'EH',
    Ye = 'YE',
    Zm = 'ZM',
    Zw = 'ZW'
  }
}
