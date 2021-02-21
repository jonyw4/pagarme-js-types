import { Authentication } from '../../common/Authentication';
declare module 'pagarme' {
  export namespace client {
    /**
     * Returns a version of client with authentication data binded to the resource requests.
     * @example
     * // API Key Authentication
     * pagarme.client.connect({ api_key: 'ak_test_y7jk294ynbzf93' })
     *
     * // Encryption Key Authentication
     * pagarme.client.connect({ encryption_key: 'ek_test_y7jk294ynbzf93' })
     *
     * // Login Authentication
     * pagarme.client.connect({ email: '', password: '' })
     */
    export function connect(
      authentication: Authentication
    ): Promise<typeof client>;
  }
}
