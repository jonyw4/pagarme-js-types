import { PaymentMethod } from '../../common/PaymentMethod';

export interface Payable {
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
  payment_method: PaymentMethod;
  accrual_date: string;
  date_created: string;
}
