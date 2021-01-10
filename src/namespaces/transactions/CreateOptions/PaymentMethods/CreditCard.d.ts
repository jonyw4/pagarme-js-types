import {
  CreditCardByData,
  CreditCardByHash,
  CreditCardById
} from './CreditCard';

interface CreditCardBase {
  payment_method: 'credit_card';
}

export type CreditCard = CreditCardBase &
  (CreditCardByData | CreditCardByHash | CreditCardById);
