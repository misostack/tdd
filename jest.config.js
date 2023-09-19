/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)": ["<rootDir>/src/$1"],
  },
  setupFiles: ["./__tests__/setup.ts"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "reports", outputName: "report.xml" }],
    ["github-actions", { silent: false }],
    "summary",
  ],
};
