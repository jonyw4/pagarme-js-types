export interface CreditCardByData {
  /** Nome do portador do cartão.  */
  card_holder_name: string;
  /** Data de validade do cartão no formato MMAA. */
  card_expiration_date: string;
  /** Número do cartão. */
  card_number: string;
  /** Código verificador do cartão. */
  card_cvv: string;
}
