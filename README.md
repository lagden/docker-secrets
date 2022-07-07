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


Helper to read the docker secrets.


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

### readSecrets(file: string | URL): Promise<string>

If success return the file content else the passed argument (file).


## License

MIT © [Thiago Lagden](http://github.com/lagden)
