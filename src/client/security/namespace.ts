declare module 'pagarme' {
  export namespace client {
    export namespace security {
      function encrypt(card: {
        card_holder_name: string;
        card_expiration_date: string;
        card_number: string;
        card_cvv: string;
      }): Promise<string>;

      function sign(opts: any, string: any): any;

      function verify(opts: any, string: any, expected: any): any;
    }
  }
}
