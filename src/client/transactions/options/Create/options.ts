import {
  Pix as TransactionCreateOptionsPix,
  Boleto as TransactionCreateOptionsBoleto,
  CreditCard as TransactionCreateOptionsCreditCard
} from './PaymentMethods/index';
import { Item, Billing, Shipping } from '../../common/index';
import { CustomerCreateOptions as Customer } from '../../../customers/options';
import {SplitRuleArg} from "../../options";

interface TransactionCreateOptionsBase {
  /** Valor a ser cobrado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000. Deve ser no mínimo 1 real (100) */
  amount: number;
  /** Endpoint do seu sistema que receberá informações a cada atualização da transação. **Caso você defina este parâmetro, o processamento da transação se torna assíncrono.** */
  postback_url?: string;
  /** Utilize false caso queira manter o processamento síncrono de uma transação. Ou seja, a resposta da transação é recebida na hora. */
  async?: boolean;
  /** Número de parcelas da transação, sendo mínimo: 1 e Máximo: 12. OBS: Se o pagamento for boleto, o padrão é 1 */
  installments?: string;
  /** Descrição que aparecerá na fatura depois do nome de sua empresa. Máximo de 13 caracteres, sendo alfanuméricos e espaços. */
  soft_descriptor?: string;
  /** Após a autorização de uma transação, você pode escolher se irá capturar ou adiar a captura do valor. Caso opte por postergar a captura, atribua o valor false. */
  capture?: boolean;
  /** Regras de divisão da transação */
  split_rules?: Array<SplitRuleArg>;
  customer?: Customer | { id: number };
  /** Obrigatório com o antifraude habilitado. Define os dados de cobrança, como nome e endereço */
  billing?: Billing;
  /** Deve ser preenchido no caso da venda de bem físico (ver objeto items) */
  shipping?: Shipping;
  /** Define os dados dos itens vendidos, como nome, preço unitário e quantidade */
  items?: Item[];
  /** Você pode passar dados adicionais na criação da transação para facilitar uma futura análise de dados tanto em nossa dashboard, quanto por seus sistemas. Ex: metadata[ idProduto ]=13933139 */
  metadata?: string;
  /** Valor único que identifica a transação para permitir uma nova tentativa de requisição com a segurança de que a mesma operação não será executada duas vezes acidentalmente.*/
  reference_key?: string;
  /** Valor único que identifica a sessão do usuário acessando o site. Máximo de 100 caracteres */
  session?: string;
  /** Data e hora do dispositivo que está efetuando a transação. Deve ser enviado no seguinte formato: yyyy-MM-dd'T'HH:mm:ss'Z. Por exemplo: 2017-10-31T14:53:00.000Z. OBS.: este campo é necessário para transações de mundo físico (com método de captura EMV e Magstripe) */
  local_time?: string;
}

export type TransactionCreateOptions = TransactionCreateOptionsBase &
  (
    | TransactionCreateOptionsPix
    | TransactionCreateOptionsBoleto
    | TransactionCreateOptionsCreditCard
  );
