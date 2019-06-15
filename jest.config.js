const config = {
  client: {
    displayName: 'client',
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.client.json',
      },
    },
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/client/**/__tests__/**/*.test.ts?(x)'],
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  },
  server: {
    displayName: 'server',
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.server.json',
      },
    },
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/server/**/__tests__/**/*.test.ts'],
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
        '!src/client/index.tsx',
        '!**/node_modules/**',
        '!**/vendor/**',
      ],
    };

module.exports = jestConfig;
