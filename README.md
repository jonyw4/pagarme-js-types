# Pagar.me JavaScript Types
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

A **unofficial repository** for adding typing / typescript compatibility for Pagar.me JS Client.

It's a **work in progress**. All type definition are take from the **[official documentation API Pagar.me V4](https://docs.pagar.me/reference)** and **[official pagarme-js documentation](https://pagarme.github.io/pagarme-js/)**

## 🤔 How to use?


1. Install the package as `devDependencies` using `npm` or `yarn` 

```sh
npm install --save-dev pagarme-js-types
```

2. Include the package into your `tsconfig.json` file

```json
// tsconfig.json
...
  "include": [
    "node_modules/pagarme-js-types/index.d.ts"
  ]
...
```

Or if that doesn't work for you, instead of changing the tsconfig.json file, 
just create the following file:
```ts
// src/@types/pagarme.d.ts
import 'pagarme-js-types/src/index';
```

See more in the [handbook](http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html).

## 💪 How to contribute
Thanks for give support to this project. To contribute you need to create a fork of this repo and send a Pull Request. Every contributor is mentioned at [Contributors list](#Contributors)

### Structure
All the code are in the `src` folder that follows the same location of Pagar.me lib.
Each *"module"* of Pagar.me lib is a folder that contains at least:

- `namespace.ts`: declaration of functions inside of a module
- `options.ts`: interfaces of the functions options
- `response.ts`: interfaces of the functions responses

Shared interfaces are in the folder called `common` in `src` root.

### Commits
This projects uses [commit lint to checks commit message](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)

### Sending a PR
Just explains what you are changing and why. I will love if you sent where did you get this information too. Thanks 😍

## To do

You can create a PR to contribute, for now these functions are typed:

### Transactions

- [x] all
- [x] capture
- [x] create
- [x] find
- [x] refund
- [x] calculateInstallmentsAmount

### Postback

- [x] calculateSignature
- [x] verifySignature

### Refunds

- [x] find

### Validations

- [x] validate

### Security
- [x] encrypt

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/rsfarias"><img src="https://avatars3.githubusercontent.com/u/40122116?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafael Farias</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=rsfarias" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jonyw4"><img src="https://avatars3.githubusercontent.com/u/14056669?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Célio</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=jonyw4" title="Code">💻</a> <a href="https://github.com/jonyw4/pagarme-js-types/commits?author=jonyw4" title="Documentation">📖</a> <a href="https://github.com/jonyw4/pagarme-js-types/pulls?q=is%3Apr+reviewed-by%3Ajonyw4" title="Reviewed Pull Requests">👀</a> <a href="#mentoring-jonyw4" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/mrlmaia"><img src="https://avatars0.githubusercontent.com/u/56596799?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Murilo Maia</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=mrlmaia" title="Code">💻</a></td>
    <td align="center"><a href="https://italodeandra.de"><img src="https://avatars1.githubusercontent.com/u/19225266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ítalo Andrade</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=italodeandra" title="Code">💻</a> <a href="https://github.com/jonyw4/pagarme-js-types/commits?author=italodeandra" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/outerlook"><img src="https://avatars1.githubusercontent.com/u/12937160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Raffael Campos</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=outerlook" title="Code">💻</a> <a href="https://github.com/jonyw4/pagarme-js-types/commits?author=outerlook" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/rodrigo-ven%C3%A2ncio-ver%C3%ADssimo-b90495a7/"><img src="https://avatars.githubusercontent.com/u/17599326?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rodrigo Venâncio Veríssimo</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=rodrigovenancioverissimo" title="Code">💻</a> <a href="https://github.com/jonyw4/pagarme-js-types/commits?author=rodrigovenancioverissimo" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/abrantesarthur"><img src="https://avatars.githubusercontent.com/u/12059676?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arthur Abrantes</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=abrantesarthur" title="Code">💻</a> <a href="https://github.com/jonyw4/pagarme-js-types/commits?author=abrantesarthur" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/sidinei-silva"><img src="https://avatars.githubusercontent.com/u/20242151?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sidinei Silva</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/issues?q=author%3Asidinei-silva" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/igorsilva3"><img src="https://avatars.githubusercontent.com/u/48392942?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Igor Silva</b></sub></a><br /><a href="https://github.com/jonyw4/pagarme-js-types/commits?author=igorsilva3" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
