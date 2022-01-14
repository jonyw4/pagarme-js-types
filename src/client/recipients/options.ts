import { PhoneNumber } from '../../common/PhoneNumber';
import { BankAccountCreateOptions } from '../bankAccounts/options';

/** https://docs.pagar.me/reference#objeto-recebedor-1 */
interface RegisterInformationInputIndividual {
  /** Utilizar "individual". */
  type: string;
  /** Número do CPF. */
  document_number: string;
  /** Nome do seller. */
  name: string;
  /** Site do seller. */
  site_url?: string;
  /** Email do seller */
  email: string;
  /** Número de telefone do seller. Deve-se informar o DDD, número e o tipo. */
  phone_numbers?: PhoneNumber[];
}

/** https://docs.pagar.me/reference#objeto-recebedor-1 */
interface RegisterInformationInputCorporation {
  /** Utilizar "corporation" */
  type: string;
  /** Número do CNPJ. */
  document_number: string;
  /** Nome fantasia do seller. */
  company_name: string;
  /** Email do seller */
  email?: string;
  /** Site do seller. */
  site_url?: string;
  /** Número de telefone do seller. Deve-se informar o DDD, número e o tipo. */
  phone_numbers?: PhoneNumber[];
  /** Dados dos sócios listados neste CNPJ. */
  managing_partners?: {
    type: string;
    document_number: string;
    email: string;
    name: string;
  }[];
}

type RegisterInformationInput =
  | RegisterInformationInputIndividual
  | RegisterInformationInputCorporation;

/**
 * Com essa rota você consegue criar um recebedor, definindo o período que ele irá receber os pagamentos e qual a conta bancária que será utilizada para envio dos pagamentos.
 * https://docs.pagar.me/reference#criando-um-recebedor
 *
 * Recebedores inativos - Todos os recebedores que foram criados a mais de 60 dias, não possuem valores a receber e nos últimos 60 dias não transacionaram ou realizaram transferências terão a transferência automática desabilitada. Mesmo que esse recebedor volte a transacionar eventualmente, a transferência automática precisa ser reabilitada manualmente nesses casos.
 */
export interface RecipientCreateOptions {
  /** Frequência na qual o recebedor irá ser pago. Valores possíveis: daily, weekly, monthly */
  transfer_interval: string;
  /** Dia no qual o recebedor vai ser pago. Depende do transfer_interval. Se for daily, não é necessário. Se for weekly pode ser de 1 (segunda) a 5 (sexta). Se for monthly, pode ser de 1 a 31. */
  transfer_day: string;
  /** Variável que indica se o recebedor pode receber os pagamentos automaticamente */
  transfer_enabled: boolean;
  /** Identificador de uma conta bancária previamente criada. Você também pode passar todos parâmetros necessários para criação de uma conta bancária. */
  bank_account_id?: string;
  bank_account?: BankAccountCreateOptions;
  /** Porcentagem do valor passível de antecipação para este recebedor. */
  anticipatable_volume_percentage?: string;
  /** Se o recebedor está habilitado para receber automaticamente ou não o valor disponível para antecipação. */
  automatic_anticipation_enabled?: string;
  /** Configuração de como devemos criar as antecipações automáticas do recebedor. Valor full para criarmos antecipações seguindo a regra de volume máximo antecipável. Valor 1025, para criarmos antecipações de vendas inteiras, modelos D+X e 10/25. */
  automatic_anticipation_type?: string;
  /** Lista de dias em que devemos criar as antecipações automáticas. */
  automatic_anticipation_days?: string;
  /** Parâmetro de quantos dias, contados do dia da antecipação para trás, devemos desconsiderar na criação desta antecipação. */
  automatic_anticipation_1025_delay?: string;
  /** URL (endpoint) de seu sistema que recebe notificações a cada mudança no status do recebedor. */
  postback_url?: string;
  /** Campo usado para receber informações cadastrais de um recebedor. Este recebedor pode ser pessoal física ou pessoa jurídica, onde cada um tem formato especifico. */
  register_information?: RegisterInformationInput;
  /** Objeto com dados adicionais do recebedor. */
  metadata: Record<string, unknown>;
}

export type RecipientUpdateOptions = {
  id: string;
} & Partial<RecipientCreateOptions>;
