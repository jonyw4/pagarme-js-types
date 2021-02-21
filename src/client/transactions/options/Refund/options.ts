interface BoletoWithData {
  /** Objeto bank_account que contém os dados da conta bancária para onde o estorno será feito. */
  bank_account: {
    /** Dígitos que identificam cada banco. Confira a lista dos bancos aqui: http://www.febraban.org.br/associados/utilitarios/Bancos.asp */
    bank_code: string;
    /** Número da agência bancária */
    agencia: string;
    /** Dígito verificador da agência. Obrigatório caso o banco o utilize. Apenas números, deve conter somente 1 dígito */
    agencia_dv: string;
    /** Número da conta */
    conta: string;
    /** Dígito verificador da conta. */
    conta_dv: string;
    /** Tipo da conta bancária. */
    type:
      | 'conta_corrente'
      | 'conta_poupanca'
      | 'conta_corrente_conjunta'
      | 'conta_poupanca_conjunta';
    /** CPF ou CNPJ do favorecido */
    document_number: string;
    /** Nome/razão social do favorecido, Até 30 caracteres */
    legal_name: string;
  };
}
interface BoletoWithId {
  /** ID da conta bancária. */
  bank_account_id: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreditCard {}

export interface DefaultArgs {
  /** The transaction ID. */
  id: number;
  /** Valor desejado para o estorno da transação. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. */
  amount?: number;
  /** Define se a operação deve ser feita de maneira assíncrona ou não. Caso true(default), a reposta de sua request será enviada via post para sua postback_url cadastrada na respectiva transação. Caso false, no response será enviado o status final de refunded. */
  async?: boolean;
  /** Você pode passar dados adicionais no estorno da transação para facilitar uma futura análise de dados por seus sistemas. */
  metadata?: string;
}
export type DynamicArgs = CreditCard | (BoletoWithId | BoletoWithData);
export type TransactionRefundOptions = DefaultArgs & DynamicArgs;
