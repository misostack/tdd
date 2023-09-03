# TDD

**Fun facts about TDD**

- “Written documentation is for cowards. We can refactor very quickly, so we can be brave enough to let the design figure itself out”
- “The code is the design“
- “It’s oral documentation”

**Acceptance Testing with TDD**

- With acceptance tests you’re writing tests that “cover” the requirements; with unit tests you’re writing tests that “cover” the design and the code.
- Acceptance tests make sure you’re coding the right thing.
- Unit tests make sure you’re coding it right.

> Conclusion: TDD = **Too Damn Difficult**

Although, the repository named TDD, but i'll show you another way to write test. DDT - which is Design Driven Test.

- Business Requirement Tests
- Scenario Tests
- Controller Tests
- Unit Tests

![image](https://user-images.githubusercontent.com/31009750/264981237-9b2414a3-6ea5-439d-960b-14425a4dfce3.png)

> Tests Are Driven from Design: Validate your implementation of the design(primary task), Act as regression tests (secondary task)

![image](https://user-images.githubusercontent.com/31009750/264981473-1747e354-4cbd-4117-8d70-dbef6d769640.png)

![image](https://user-images.githubusercontent.com/31009750/264982029-5ba5adba-7046-4d69-8c20-5496d67bb5a6.png)
**Notes**

> Typescript Version: 5.2.2

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
- [x] Support Debug

### Setup Jest

- [Setup JestJS](https://jestjs.io/docs/getting-started)

```sh
npm install --save-dev jest
npm i -D ts-jest @types/jest
npx ts-jest config:init
```

### Setup Github Actions to run test

- [Quick start](https://docs.github.com/en/actions/quickstart)
- [Github Action Runners](https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners)
- [Example with nodejs](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)
- [Available Actions](https://github.com/actions)

```sh
mkdir -p .github/workflows
```

## DDT - Design Driven Test

> The tests you write and perform are closely tied into the customer’s **requirements**, so you spend time testing only what **needs** to be tested.

### Knowing When You’re Done Is Hard

- When writing tests, it’s sometimes unclear when you’re “done”.... Even your codebase **coverage** is 100%, it is still **not enough**.
- With DDT, your tests are driven directly from your **use cases** and **conceptual design**.
- So you will know **precisely** when you're **done**.

### Leaving Testing Until Later Costs More

- It’s well established that leaving bug-hunting and fixing until late in a project increases the time and cost involved in eliminating those bugs.
- While it does make sense intuitively that you can’t test something before it exists, DDT gets into nooks and crannies of development, and provides early feedback on the state of your code and the design.

### Testing Badly Designed Code Is Hard

- It sounds obvious, but code that is badly designed tends to be rigid, difficult to adapt or re-use in some other context, and full of side effects.
- With DDT, we wanted a testing process that inherently promotes good design and well-written, easily testable code.

![image](https://user-images.githubusercontent.com/31009750/265255252-aeb2c62d-2eae-4390-9673-72e93af09298.png)

### Example for Login Use Case

Start with

![image](https://user-images.githubusercontent.com/31009750/265267699-d38b6e56-cb71-4aaf-8ae1-01df3745aa0c.png)

Then

![image](https://user-images.githubusercontent.com/31009750/265270456-60760354-0530-4d54-8de3-1af9add5ae06.png)

Then
