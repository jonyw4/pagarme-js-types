import { CustomerCreateOptions } from './options';
import { Address } from '../../common/Address';

export interface Customer extends CustomerCreateOptions {
  /** Identificador do cliente na loja */
  id: string;
  /** Lista dos telefones relacionados ao cliente */
  phones: string[];
  /** Lista de endereços relacionados ao cliente */
  addresses: Address[];
}
