export interface SearchOptions {
  type: 'transaction' | 'subscription' | 'bank_account' | 'customer';
  query: Record<string, unknown> | string;
  search_type?: string;
}
