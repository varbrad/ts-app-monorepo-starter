const config = {
  client: {
    displayName: 'client',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/client/**/__tests__/**/*.ts?(x)'],
    collectCoverageFrom: [
      'src/client/**',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  },
  server: {
    displayName: 'server',
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/server/**/__tests__/**/*.ts'],
    collectCoverageFrom: [
      'src/server/**',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
  },
};

const project = process.env.JEST_PROJECT;

const jestConfig = project
  ? config[project]
  : {
      projects: Object.values(config),
    };

module.exports = jestConfig;
