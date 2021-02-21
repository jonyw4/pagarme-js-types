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

type InputValidateGenericTypes = string | string[] | number | number[];

export interface InputValidate {
  cnpj?: InputValidateGenericTypes;
  cpf?: InputValidateGenericTypes;
  ddd?: InputValidateGenericTypes;
  zipcode?: InputValidateGenericTypes;
  phone?: InputValidateGenericTypes;
  card?: {
    card_holder_name: string;
    card_number: string | number;
    card_cvv: string | number;
    card_expiration_date: string | number;
  };
}

declare module 'pagarme' {
  export namespace client {
    export function validate(body: InputValidate): Validate;
  }
}
