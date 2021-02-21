import { Transaction } from '../transactions/responses';
import { TransactionStatus } from '../../common/TransactionStatus';

export interface Postback {
  /** ID da transação. */
  id: number;
  /** A qual evento o postback se refere.  */
  event: 'transaction_status_changed' | 'subscription_status_changed';
  /** Status anterior da transação. */
  old_status: TransactionStatus;
  /** Status ideal para objetos deste tipo, em um fluxo normal, onde autorização e captura são feitos com sucesso, por exemplo. */
  desired_status: TransactionStatus;
  /** Status para o qual efetivamente mudou. */
  current_status: TransactionStatus;
  /** Qual o tipo do objeto referido.  */
  object: 'transaction' | 'subscription';
  /** Possui todas as informações do objeto.  */
  transaction: Transaction;
}
