import fastify from 'fastify';

const app = fastify();

app.get(
  '/',
  async (): Promise<object> => {
    return { status: 50 };
  },
);

export default app;
