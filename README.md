# TDD

**Notes**

- Typescript Version: 5.2.2

> Test Driven Development Guidelines

- Testing Concepts
- JestJS Examples
- Real world examples

## Content

1. [ ] Init Typescript Project ( Support Run/Debug )
2. [ ] Setup JestJS ( Support Run/Debug )
3. [ ] Testing Concepts
4. [ ] JestJS Usage
5. [ ] Real world examples

### Init Typescript Project

```
npm init
npm install typescript --save-dev
npx tsc --init
npm install --save-dev @tsconfig/node16
npm i -D ts-node tslib @types/node
npm i ts-node-dev --save-dev
# support alias
npm i tsconfig-paths --save-dev
npm i jest-junit --save-dev
```

- [tsconfig for node16](https://www.npmjs.com/package/@tsconfig/node16)
- [tsconfig for node18](https://www.npmjs.com/package/@tsconfig/node18)
- [restart target node process with typescript](https://www.npmjs.com/package/ts-node-dev)
- [ts-node is a TypeScript execution engine and REPL for Node.js.](https://typestrong.org/ts-node/docs/)
- [Compiles your TS app and restarts when files are modified.](https://www.npmjs.com/package/ts-node-dev)
- [A Jest reporter that creates compatible junit xml files](https://www.npmjs.com/package/jest-junit)

**Configuration**

- [x] Add @types/node
- [x] Support Exactly Node Version
- [x] Src Directory vs Build(Dist) Directory
- [x] Alias

### Setup Jest

- [Setup JestJS](https://jestjs.io/docs/getting-started)

```sh
npm install --save-dev jest
npm i -D ts-jest @types/jest
npx ts-jest config:init
```
