import { CustomerCreateOptions } from './options';
import { Address } from '../../common/Address';

export interface Customer extends CustomerCreateOptions {
  /** Tipo do objeto */
  object:  "customer",
  /** Identificador do cliente na loja */
  id: number;
  /** Número do documento. */
  document_number: number | null;
  /** Tipo do documento. */
  document_type: 'cpf' | 'cnpj' | 'passaport' | 'other' ;
  /** Local de nascimento. */
  born_at: string | null;
  /** Gênero */
  gender: string | null;
  /** Quando o customer foi criado */
  date_created: string;
  /** Lista dos telefones relacionados ao cliente */
  phones: string[];
  /** Lista de endereços relacionados ao cliente */
  addresses: Address[];
}
