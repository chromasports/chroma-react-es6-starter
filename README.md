# Chroma React ES6 Starter Kit
[![Circle CI](https://circleci.com/gh/chromasports/chroma-react-es6-starter.svg?style=svg)](https://circleci.com/gh/chromasports/chroma-react-es6-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/250965feb9f74c8e8bd5c7db28f125d8)](https://www.codacy.com)
## Aim

The aim of this project is to get developers past the initial struggle of the development and build setup of React, ESNext, Webpack & Babel. Also to show the best practices I have found along the way.

### Technologies Included
* node
* npm
* babel 6 (utilized to allow the use of ESNext)
* webpack
* react
* redux
* indexedDB
* mocha
* nightwatch
* selenium

## Steup

### Installing

```bash
npm install
```

### Running

```bash
npm run dev
```

### Testing

Unit Testing

```bash
npm run test
```
or for watching
```bash
npm test:watch
```
also check out mochas other arguments like --grep
```bash
npm run:test -- --grep app
```

End-2-End Testing
*(testing currently require two terminal windows/tabs)*

The following commands should be run in separate terminal windows/tabs in the order specified

```bash
npm run selenium
npm run test:e2e
```

Code Coverage

```bash
npm run test:coverage
```

### Building
```bash
npm run build
```

### Misc ( linting / coding standards / documentation )
```bash
npm run eslint
npm run docs
```

For the record, `npm run docs` command is for crude docco documentation. This should be improved
