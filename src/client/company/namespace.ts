declare module 'pagarme' {
  export namespace client {
    export namespace company {
      function activate(opts: any): any;

      function affiliationProgress(opts: any): any;

      function create(opts: any, body: any): any;

      function createTemporary(opts: any, body: any): any;

      function current(opts: any): any;

      function resetKeys(opts: any): any;

      function update(opts: any, body: any): any;

      function updateBranding(opts: any, body: any): any;

      namespace emailTemplates {
        function find(opts: any, body: any): any;

        function update(opts: any, body: any): any;
      }
    }
  }
}
