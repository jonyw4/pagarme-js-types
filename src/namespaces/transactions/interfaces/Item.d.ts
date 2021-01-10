export interface Item {
  /** SKU (unidade de manutenção de estoque) ou número de identificação na loja */
  id: string;
  /** Nome do item vendido. */
  title: string;
  /** Preço por unidade. Por exemplo, se o preço de cada item é vinte reais e seis centavos (R$20,06), o valor deve ser fornecido como ‘2006’ */
  unit_price: number;
  /** Número de unidades vendidas do produto */
  quantity: number;
  /** Caracteriza o produto como bem físico ou não. Por bem físico, entende-se produtos que devem ser enviados fisicamente ao comprador, como calçados, eletrônicos e brinquedos. Se for um bem físico deve conter true (sim). Caso contrário, deve conter false (não) */
  tangible: boolean;
  /** Categoria */
  category?: string;
  /** Local */
  venue?: string;
  /** Data Estimativa fornecida no formato AAAA-MM-DD */
  date?: string;
}
