import { BankAccount } from '../bankAccounts/responses';

export interface Transfer {
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
  Bank_account: BankAccount;
  Date_created: string;
  metadata: JSON;
}
