export interface CreditCardByHash {
  /** Informações do cartão do cliente criptografadas em sua aplicação. **OBS: apenas para transações de Cartão de crédito você deve passar o `card_hash` ou `card_id`. Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.** */
  card_hash: string;
}
