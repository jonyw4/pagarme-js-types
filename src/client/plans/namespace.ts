import { Options } from "../../common/Options";
import { PlansAllOptions, PlansCreateOptions, PlansFindOptions, PlansUpdateOptions } from './options';

declare module 'pagarme' {
  export namespace client {
    export namespace plans {
      /**
       * Makes a request to /plans
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-planos)
       */
      function all(opts: Options, body: PlansAllOptions): Promise<any>;

      /**
       * Creates a plan from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#criando-planos)
       */
      function create(opts: Options, body: PlansCreateOptions): Promise<any>;

      /**
       * Makes a request to /plans or to /plans/:id
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request. API Reference for this payload (https://pagarme.readme.io/v1/reference#retornando-um-plano)
       */
      function find(opts: Options, body: PlansFindOptions): Promise<any>;

      function findAll(a0: any, a1: any, ...args: any[]): any;

      /**
       * Updates a plans from the given payload.
       * @param opts An options params which is usually already bound by connect functions.
       * @param body The payload for the request API Reference for this payload (https://pagarme.readme.io/v1/reference#atualizando-planos)
       */
      function update(opts: Options, body: PlansUpdateOptions): Promise<any>;
    }
  }
}
