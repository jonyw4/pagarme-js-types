export interface Address {
  /** País. Duas letras minúsculas. Deve seguir o padrão `ISO 3166-1 alpha-2` */
  country: string;
  /** Estado */
  state: string;
  /** Cidade */
  city: string;
  /** Rua */
  street: string;
  /** Número */
  street_number: string;
  /** Cidade */
  zipcode: string;
  /** Bairro */
  neighborhood?: string;
  /** Complemento. **Não pode ser uma string vazia** nem null */
  complementary?: string;
}
