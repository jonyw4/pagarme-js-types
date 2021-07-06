export interface BulkAnticipationsCreateOptions {
  /** ID do recebedor para o qual criar a antecipação */
  recipientId: string;
  /** Data que você deseja receber a antecipação em sua conta Pagar.me */
  payment_date: string;
  /** Define o período de onde os recebíveis serão escolhidos. start define recebíveis próximos, perto de serem pagos, e end define recebíveis longes, no final de todos recebíveis que você possui para receber */
  timeframe: "start" | "end";
  /** Valor líquido, em centavos, que você deseja receber de antecipação */
  requested_amount: number;
  /** Define se a antecipação deve retornar status  'building' */
  build?: boolean;
  /** Define se o valor da antecipação será transferido automaticamente para a conta bancária do recebedor */
  automatic_transfer?: boolean;
}

export interface BulkAnticipationsConfirmOptions {
  /** ID de recebedor desejado */
  recipientId: string;
  /** ID da antecipação desejada */
  id: string;
}