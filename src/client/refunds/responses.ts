import { PaymentMethod } from '../../common/PaymentMethod';

export interface Refund {
  object: 'refund';
  /** Número identificador do estorno. */
  id: string;
  /** Valor, em centavos, do estorno. Exemplo: R$100,00 = 10000 */
  amount: number;
  /** Tipo de pagamento da transação estornada. */
  type: PaymentMethod | 'debit_card';
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
