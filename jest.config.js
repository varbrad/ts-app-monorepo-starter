const config = {
  client: {
    displayName: 'client',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/client/**/__tests__/**/*.test.ts?(x)'],
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
    testMatch: ['<rootDir>/src/server/**/__tests__/**/*.test.ts'],
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
      collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
      ],
    };

module.exports = jestConfig;
