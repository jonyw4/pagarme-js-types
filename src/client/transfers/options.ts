export interface TransferCreateOptions {
  amount: string;
  recipient_id: string;
  metaData?: JSON;
}

export interface TransferAllOptions {
  count: number;
  page: number;
  bank_account_id?: string;
  amount?: string;
  recipient_id?: string;
  id?: string;
  date_created?: string;
  created_at?: string;
}
