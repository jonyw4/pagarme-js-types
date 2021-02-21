export interface Pix {
  payment_method: 'pix';
  /** Deve ser informada a data de expiração do Pix. Aceitaremos os
    formatos ISO 8601 (YYYY-MM-DD) para Pix com expiração até o fim do dia e RFC3339
    (YYYY-MM-DDThh:mm:ss) quando o Pix deva ser encerrado em algum horário específico
    do dia */
  pix_expiration_date: string;
  /** campos que serão exibidos como soft descriptors ao pagador */
  pix_additional_fields: {
    name: string;
    value: string;
  }[];
}
