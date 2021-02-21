export type BankAccountTypes =
  | 'conta_corrente'
  | 'conta_poupanca'
  | 'conta_corrente_conjunta'
  | 'conta_poupanca_conjunta';

/**
 * Cria uma conta bancária para futuros pagamentos.
 * https://docs.pagar.me/reference#criando-uma-conta-banc%C3%A1ria
 *
 * Os bancos aceitos pela Pagar.me são aqueles presentes na Febraban. A lista completa pode ser encontrada aqui: https://www.bcb.gov.br/pom/spb/estatistica/port/ASTR003.pdf
 *
 * Se a agência de sua conta não possuir dv, basta não adicionar a chave agencia_dv na request.
 */
export interface BankAccountCreateOptions {
  /** Agência onde sua conta foi criada OBS: Limite de 4 caracteres, apenas números */
  agencia: string;
  /** Dígito verificador da sua agência OBS: Deve conter 1 dígito, apenas alfanuméricos */
  agencia_dv?: string;
  /** Código do banco OBS: Deve conter 3 caracteres, apenas números */
  bank_code: string;
  /** Número da conta bancária OBS: Limite de 13 caracteres, apenas números */
  conta: string;
  /** Dígito verificador da conta OBS: Limite de 2 caracteres, apenas alfanuméricos */
  conta_dv: string;
  /** Documento identificador do titular da conta (cpf ou cnpj) Ex: 35146484252 */
  document_number: string;
  /** Nome completo (se pessoa física) ou razão social (se pessoa jurídica). Até 30 caractéres */
  legal_name: string;
  /** Tipo de conta bancária, valores possíveis: conta_corrente, conta_poupanca, conta_corrente_conjunta, conta_poupanca_conjunta */
  type?: BankAccountTypes;
}
