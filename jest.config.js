/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testDirectoryName: 'test',
  modulePathIgnorePatterns: ['.tmp/', './test/mock-samples']
};
