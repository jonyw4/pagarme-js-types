export type CardCreateOptions = {
  /** Informações do cliente do card a ser gerado. */
  customer_id?: number;
} & (
  | {
      /** Número do cartão. */
      card_number: string;
      /** Data de expiração do cartão. */
      card_expiration_date: string;
      /** Nome no cartão do portador. */
      card_holder_name: string;
      /** Código de segurança do cartão. */
      card_cvv?: string;
    }
  | {
      /** Dados criptografados do cartão */
      card_hash: string;
    }
);

export interface CardFindOptions {
  /** Id do cartão que deseja consultar os dados. */
  id: string;
}

export type CardAllOptions = CardFindOptions & {
  /** Pagination option to get a list of cards. Number of cards in a page */
  count?: number;
  /** Pagination option for a list of cards. The page index. */
  page?: number;
};
