import { Authentication } from './Authentication';

// this object is not officially documented.
// but it is officially used as seen on pagarme-js tests: https://github.com/pagarme/pagarme-js/blob/master/test/runTest.js

export interface Options {
    baseURL?: string;
    body?: Authentication;
    skipAuthentication?: boolean;
}
