import fastify from 'fastify';

export const createApp = (): fastify.FastifyInstance => {
  const app = fastify();

  app.get(
    '/',
    async (): Promise<object> => ({ status: 200, data: 'Hello, world!' }),
  );

  return app;
};
