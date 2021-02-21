export interface BalanceResponse {
  object: 'balance';
  waiting_funds: { amount: number | string };
  available: { amount: number | string };
  transferred: { amount: number | string };
}
