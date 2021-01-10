export interface BankAccount {
  object: string;
  id: number;
  bank_code: string;
  agencia: string;
  agencia_dv: string;
  conta: string;
  conta_dv: string;
  type: string;
  document_type: string;
  document_number: string;
  legal_name: string;
  charge_transfer_fees: boolean;
  date_created: Date;
}
