export interface PayableFindOptions {
  // The payable ID. If not sent a
  id?: string;
  // A transaction ID to get all the payables.
  transactionId?: string;
  // Pagination option for transaction list. Number of transaction in a page
  count?: number;
  // Pagination option for transaction list. The page index.
  page?: number;
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