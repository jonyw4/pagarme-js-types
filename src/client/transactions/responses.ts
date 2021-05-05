import {
  Document,
  Address,
  RefuseStatus,
  TransactionStatus,
  PaymentMethod
} from '../../common/index';
import { Shipping, Item } from './common/index';
import { Customer } from '../customers/responses';

interface Installment {
  installment: number;
  amount: number;
  installment_amount: number;
}

export interface Transaction {
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
  payment_method: PaymentMethod;
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
  customer: Customer;
  billing: Shipping;
  shipping: Shipping;
  items: Item[];
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

export interface CalculateInstallmentsAmount {
  installments: {
    [key: string]: Installment;
  };
}

export interface CardHashKey {
    /** Momento de criação da chave pública. */
    date_created: string,
    /** id retornado e que será utilizado para compor o card_hash, logo, é importante que você o reserve. */
    id: number,
    /** IP de onde a request foi originada. */
    ip: string,
    /** Chave pública utilizada para criptografar os dados do cartão. */
    public_key: string,
}
