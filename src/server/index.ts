import { createApp } from './app';

const start = async (): Promise<void> => {
  const app = createApp();
  try {
    await app.listen(3000);
  } catch (err) {
    process.exit(1);
  }
};

start();
