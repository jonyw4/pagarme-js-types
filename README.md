# Pagar.me JavaScript Types
[![npm (scoped)](https://img.shields.io/npm/v/pagarme-js-type.svg)](https://www.npmjs.com/package/pagarme-js-type)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A unofficial repository for adding typing / typescript compatibility for Pagar.me.

It's a **work in progress**. All type definition are take from the **[official documentation API Pagar.me V4](https://docs.pagar.me/reference)** and **[official pagarme-js documentation](https://pagarme.github.io/pagarme-js/)**

## What are declaration files?

See the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## How do I get them?

### npm

This is the preferred method. For example:

```sh
npm install --save-dev pagarme-js-types
```

```json
// tsconfig.json
...
  "include": [
    "node_modules/pagarme-js-type/index.d.ts"
  ]
...
```

See more in the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

## To do
You can create a PR to contribute for now these functions are typed:
### Transactions 
- [x] all
- [x] capture
- [x] create
- [x] find
- [x] refund

### Postback
- [x] calculateSignature
- [x] verifySignature

### Refunds 
- [x] find