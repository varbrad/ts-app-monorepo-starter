import { FastifyInstance } from 'fastify';
import { createApp } from '../app';

describe('App', (): void => {
  let app: FastifyInstance;

  beforeEach((): void => {
    app = createApp();
  });

  afterEach((): void => {
    app.close();
  });

  it('should return a fastify instance', (): void => {
    expect(app).toBeDefined();
  });

  it('should match the response snapshot', async (): Promise<void> => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.payload).toMatchInlineSnapshot(
      `"{\\"status\\":200,\\"data\\":\\"Hello, world!\\"}"`,
    );
  });
});
