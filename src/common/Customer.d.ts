import { InputCustomer } from './InputCustomer';
import { Address } from './Address';

export interface Customer extends InputCustomer {
  /** Identificador do cliente na loja */
  id: string;
  /** Lista dos telefones relacionados ao cliente */
  phones: string[];
  /** Lista de endereços relacionados ao cliente */
  addresses: Address[];
}
