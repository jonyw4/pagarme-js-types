export interface RefundFindOptions {
  /** Filtro pelo ID da transação */
  transaction_id?: string;
  /**
   * Filtro pela data de criação do estorno
   *
   * É importante notar que serão retornados apenas os dados referentes a estornos criados à partir de 08/05/2017.
   * */
  date_created?: string;
  /** Filtro pela data de atualização do estorno */
  date_updated?: string;
}
