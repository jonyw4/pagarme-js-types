type ValidateInputGenericTypes = string | string[] | number | number[];

export interface InputValidate {
  cnpj?: ValidateInputGenericTypes;
  cpf?: ValidateInputGenericTypes;
  ddd?: ValidateInputGenericTypes;
  zipcode?: ValidateInputGenericTypes;
  phone?: ValidateInputGenericTypes;
  card?: {
    card_holder_name: string;
    card_number: string | number;
    card_cvv: string | number;
    card_expiration_date: string | number;
  };
}
