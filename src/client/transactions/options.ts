export { TransactionCreateOptions } from './options/Create/options';
export { TransactionRefundOptions } from './options/Refund/options';
import { TransactionStatus } from '../../common/TransactionStatus';
import { Address } from '../../common/Address';
import { PhoneNumber } from '../../common/PhoneNumber';
import { CustomerCreateOptions as Customer } from '../customers/options';

export interface TransactionAllOptions {
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
  customer?: Partial<Customer>;
  address?: Partial<Address>;
  phone?: PhoneNumber;
  reference_key?: string;
  order_id?: string;
  metadata?: JSON;
}

export interface TransactionCalculateInstallmentsAmountOptions {
  /** The interest rate's value. */
  interest_rate: number;
  /**  The value of the purchase. */
  amount: number;
  /** The max number of installments. */
  max_installments?: number;
  /** The number of installments without interest. */
  free_installments?: number;
}

export interface SplitRuleArg {
  /** indica se o recebedor atrelado assumirá os riscos de chargeback da transação */
  liable: boolean;
  /** indica se o recebedor vinculado à regra será cobrado pelas taxas da transação */
  charge_processing_fee: boolean;
  /** valor em centavos de quanto da transação irá para o recebedor. Não pode estar presente ao mesmo tempo que 'percentage' */
  amount?: number;
  /** valor em porcentagem de quanto da transação irá para o recebedor. Não pode estar presente ao mesmo tempo que 'amount' */
  percentage?: number;
  /** id de um recebedor */
  recipient_id: string;
}

export interface TransactionCaptureOptions {
  /** Id ou o token da transação a ser capturada */
  id: string;
  /** Valor a ser capturado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. */
  amount: number;
  /** Regras de divisão da transação */
  split_rules?: SplitRuleArg[];
}

interface TransactionFindOptionsByData {
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
  customer?: Partial<Customer>;
  address?: Partial<Address>;
  phone?: PhoneNumber;
  reference_key?: string;
  order_id?: string;
  metadata?: JSON;
}
interface TransactionFindOptionsById {
  /** The transaction ID. If not sent a transaction list will be returned instead. */
  id: number;
}
export type TransactionFindOptions =
  | TransactionFindOptionsByData
  | TransactionFindOptionsById;
