import {BulkAnticipationsConfirmOptions, BulkAnticipationsCreateOptions} from "./options";
import {BulkAnticipation} from "./responses";

declare module 'pagarme' {
  export namespace client {
    export namespace bulkAnticipations {
      function all(opts: any, body: any): any;

      function cancel(opts: any, body: any): any;

      function confirm(opts: BulkAnticipationsConfirmOptions): Promise<BulkAnticipation>;

      function create(opts: BulkAnticipationsCreateOptions): Promise<BulkAnticipation>;

      function days(opts: any, body: any): any;

      function destroy(opts: any, body: any): any;

      function find(opts: any, body: any): any;

      function limits(opts: any, body: any): any;

      function update(opts: any, body: any): any;
    }
  }
}
