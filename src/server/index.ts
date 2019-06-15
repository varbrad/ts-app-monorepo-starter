import app from './app';

const start = async (): Promise<void> => {
  try {
    await app.listen(3000);
  } catch (err) {
    process.exit(1);
  }
};

start()
