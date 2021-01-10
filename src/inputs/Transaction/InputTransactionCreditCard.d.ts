import { CreditCard, CreditCardByHash, CreditCardById } from './CreditCard';

interface InputCreditCardBase {
  payment_method: 'credit_card';
}

export type InputTransactionCreditCart = InputCreditCardBase &
  (CreditCard | CreditCardByHash | CreditCardById);
