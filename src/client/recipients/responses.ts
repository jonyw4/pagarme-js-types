import { BankAccount } from '../bankAccounts/responses';

export interface Recipient {
  object: string;
  id: string;
  transfer_enabled: boolean;
  last_transfer?: any;
  transfer_interval: string;
  transfer_day: number;
  automatic_anticipation_enabled: boolean;
  anticipatable_volume_percentage: number;
  date_created: Date;
  date_updated: Date;
  postback_url: string;
  status: string;
  status_reason?: any;
  metadata?: any;
  bank_account: BankAccount;
}
