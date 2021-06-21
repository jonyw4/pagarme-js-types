export interface BulkAnticipation {
  /** Nome do tipo do objeto criado/modificado */
  object: "bulk_anticipation";
  /** Status atual da antecipação */
  status: "building" | "pending" | "approved" | "refused" | "canceled";
  /** período do qual os recebíveis irão vir, */
  timeframe: "start" | "end";
  /** Data de pagamento da antecipação. */
  payment_date: string;
  /** valor bruto, em centavos, da antecipação criada. */
  amount: number;
  /** Taxa de adquirência relacionada aos recebíveis antecipados. */
  fee: number;
  /** Taxa de antecipação relacionada aos recebíveis antecipados. */
  anticipation_fee: number;
  /** Identificador da antecipação */
  id: string;  
}