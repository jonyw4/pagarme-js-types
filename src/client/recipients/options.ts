import { PhoneNumber } from '../../common/PhoneNumber';

export interface RecipientCreateOptions {
  transfer_interval: string;
  transfer_day: string;
  transfer_enabled: boolean;
  bank_account_id?: string;
  anticipatable_volume_percentage?: string;
  automatic_anticipation_enabled?: string;
  postback_url?: string;
  register_information?: {
    type: 'individual';
    document_number: string;
    name: string;
    site_url?: string;
    email: string;
    phone_numbers?: PhoneNumber[];
  };
}

export type RecipientUpdateOptions = {
  recipient_id: string;
} & Partial<RecipientCreateOptions>;
