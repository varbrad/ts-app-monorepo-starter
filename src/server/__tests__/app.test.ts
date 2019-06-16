import { createApp } from '../app';

describe('App', (): void => {
  it('should return a fastify instance', (): void => {
    expect(createApp()).toBeDefined();
  });
});
