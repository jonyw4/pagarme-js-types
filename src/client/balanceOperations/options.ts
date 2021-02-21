export interface BalanceOperationsFind {
  count: number;
  page: number;
  status?: 'waiting_funds' | 'available' | 'transferred';
  start_date?: number;
  end_date?: number;
}
