# Chroma React ES6 Starter Kit

[![Circle CI](https://circleci.com/gh/chromasports/chroma-react-es6-starter.svg?style=svg)](https://circleci.com/gh/chromasports/chroma-react-es6-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/250965feb9f74c8e8bd5c7db28f125d8)](https://www.codacy.com)

## About

The aim of this project is to showcase the use of react, webpack, babel and esnext.

Just so you are aware, all of this is an experiment!

TODO: Fix server side rendering... currently server is simply used as an api...
TODO: Serve frontend from express (use webpack isomorphic tools)

## What you get

* babel 6
* webpack
* react
* redux
* indexedDB
* mocha
* nightwatch
* selenium
* isparta (istanbul)
* circleCI config

## Setup

### Prerequisites
* node
* npm

### Installing

```bash
npm install
```

### Running

```bash
npm run dev
```

### Testing

*Note: You must be serving the app in a seperate terminal for all tests to pass*

#### Unit Testing

```bash
npm run test
```
or for watching
```bash
npm run test:watch
```
also check out mochas other arguments like --grep
```bash
npm run test -- --grep app
```

#### End-2-End Testing

```bash
npm run test:e2e
```

#### Code Coverage

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
