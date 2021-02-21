export type TransactionStatus =
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
