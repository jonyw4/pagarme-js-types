export interface CreditCardById {
  /** Ao realizar uma transação, retornamos o card_id do cartão, para que nas próximas transações ele possa ser utilizado como forma de identificar os dados de pagamento. Exemplo de utilização: One-click buy. OBS: apenas para transações de Cartão de crédito você deve passar o card_hash ou card_id. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável. */
  card_id: string;
}
