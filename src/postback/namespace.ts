declare module 'pagarme' {
  export namespace postback {
    function calculateSignature(
      /** the keys used to sign the hash. */
      key: string,
      /** The string to be hashed. */
      string: string
    ): string;
    function verifySignature(
      /** the keys used to sign the hash. */
      key: string,
      /** The string to be hashed. */
      string: string,
      /** The expected result. */
      expected: string
    ): boolean;
  }
}
