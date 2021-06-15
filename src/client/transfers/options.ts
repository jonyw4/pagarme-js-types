export interface TransferCreateOptions {
  amount: number;
  recipientId: string;
  metaData?: any;
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


export interface TransferFindOptions {
  id?: string;
}
