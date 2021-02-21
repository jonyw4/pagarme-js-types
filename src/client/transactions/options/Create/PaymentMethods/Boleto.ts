export interface Boleto {
  payment_method: 'boleto';
  boleto_fine?: {
    /** Dias após a expiração do boleto quando a multa deve ser cobrada. */
    days?: string;
    /** Valor em centavos da multa. **Valor máximo de 2% do valor do documento.** */
    amount?: string;
  };
  boleto_interest?: {
    /** Dias após a expiração do boleto quando o juros deve ser cobrado. */
    days?: string;
    /** Valor em porcentagem da taxa de juros que será cobrado por dia. **Valor máximo de 1% ao mês.** */
    amount?: string;
  };
  /** Prazo limite para pagamento do boleto. Deve ser passado no formato yyyy-MM-dd.Default: data atual + 7 dias */
  boleto_expiration_date?: string;
  /** Campo instruções do boleto. Máximo de 255 caracteres */
  boleto_instructions?: string;
}
