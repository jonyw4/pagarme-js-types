export interface Validate {
  cnpj?: boolean;
  cpf?: boolean;
  ddd?: boolean;
  zipcode?: boolean;
  phone?: boolean;
  card?: {
    brand: string;
    card_holder_name: boolean;
    card_number: boolean;
    card_cvv: boolean;
    card_expiration_date: boolean;
  };
}
