# docker-secrets

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/docker-secrets.svg
[npm]:             https://www.npmjs.com/package/@tadashi/docker-secrets
[ci-img]:          https://github.com/lagden/docker-secrets/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/docker-secrets/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/docker-secrets/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/docker-secrets?branch=main


Reads the content of a secrets file.


## Install

```
$ npm i @tadashi/docker-secrets
```


## Usage

```js
import process from 'node:process'
import readSecrets from '@tadashi/docker-secrets'

const {
  PASSWD,
} = process.env

const password = await readSecrets(PASSWD)
```


## API

### readSecrets(value: string | URL): Promise<string>

Return the content of the secrets file as a string, or the original value if an error occurs.


## Donate ❤️

- BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [Thiago Lagden](http://github.com/lagden)
