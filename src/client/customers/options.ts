import { Country } from '../../common/Country';
import { Document } from '../../common/Document';
import { CustomerType } from '../../common/CustomerType';

export interface CustomerCreateOptions {
  /** Identificador do cliente em sua plataforma. */
  external_id: string;
  /** Nome ou razão social do comprador */
  name: string;
  /** Tipo de documento. Deve ser `individual` para pessoa física ou `corporation` para pessoa jurídica */
  type: CustomerType;
  /** País */
  country: Country;
  /** E-mail do comprador */
  email: string;
  /** Documento. Contém campos type para tipo de documento e number para número do documento. */
  documents: Document[];
  /** Números de telefone. Requer ao menos um valor. Deve seguir o padrão *E.164* */
  phone_numbers: string[];
  /** Data de nascimento. */
  birthday?: string | null;
}
