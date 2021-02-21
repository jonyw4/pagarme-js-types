declare module 'pagarme' {
  export namespace client {
    export namespace session {
      function create(opts: any, email: any, password: any): any;

      function destroy(opts: any, id: any): any;

      function verify(opts: any, payload: any): any;
    }
  }
}
