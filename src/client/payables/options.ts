export interface PayableFindOptions {
  transaction_id: string;
}

export interface PayableAllOptions {
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
