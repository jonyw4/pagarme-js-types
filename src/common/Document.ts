export interface Document {
  /** tipo do objeto */
  object?: "document",
  /** id relacionada ao documento */
  id?: "string",
  /**
   * Tipo de documento.
   *
   * Para compradores brasileiros, deve ser fornecido ao menos um CPF (no caso de pessoa física, i.e. `individual`) ou CNPJ (no caso de pessoa jurídica, i.e. `corporation`). Para compradores internacionais, o documento pode ser um passaporte (type `passport`) ou um campo personalizado (type `other`).
   * */
  type: 'cpf' | 'cnpj' | 'passaport' | 'other';
  /** Número do documento */
  number: string;
}
